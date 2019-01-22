import { createSelector } from 'reselect';
import { NewsActions } from '../actions';
import * as interfaces from '../interfaces/interfaces'


const newsSelector = (state: interfaces.IStoreInterface) => state.news;
const searchTextSelector = (state: interfaces.IStoreInterface) => state.search.searchText;
const sortSelector = (state: interfaces.IStoreInterface) => state.sort.sortBy;
const catSortSelector = (state: interfaces.IStoreInterface) => state.catsort.catsort;

export const searchNewsSelector = createSelector(newsSelector, searchTextSelector, sortSelector, catSortSelector,
    (news, searchText, sort, catsort) => {
        const searchTextInLowerCase = searchText.toLowerCase();
        let filtredNews;
        if ((!searchTextInLowerCase && !catsort && !sort) || catsort === 'all' ){
            filtredNews = {news : news}
        }

        const sortedNews = news.news.sort((first: interfaces.IDataInterface, second:interfaces.IDataInterface) => {
            return first.title.localeCompare(second.title);
        });

        if (sort === NewsActions.SORT_ASC){
            filtredNews = {news : {news:sortedNews}}
        }

        if (sort === NewsActions.SORT_DESC){
            filtredNews = {news : {news:sortedNews.reverse()}}
        }

        if( searchTextInLowerCase ){
            filtredNews = {
                news: {news: news.news.filter((article: interfaces.IDataInterface) =>
                        article.description.toLowerCase().includes(searchTextInLowerCase) ||
                        article.title.toLowerCase().includes(searchTextInLowerCase))}
            }
        }

        if (catsort && catsort !== 'all') {
            filtredNews = {
                news: {
                    news: news.news.filter((article: interfaces.IDataInterface) =>
                        article.category === catsort)
                }
            };
        }
return filtredNews;
    });
