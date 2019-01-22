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

        if ((!searchTextInLowerCase && !catsort && !sort) || catsort === 'all' ){
            return {news : news}
        }

        const sortedNews = news.news.sort((first: interfaces.IDataInterface, second:interfaces.IDataInterface) => {
            return first.title.localeCompare(second.title);
        });

        if (sort === NewsActions.SORT_ASC){
            return {news : {news:sortedNews}}
        }

        if (sort === NewsActions.SORT_DESC){
            return {news : {news:sortedNews.reverse()}}
        }

        if (catsort && catsort !== 'all') {
            return {
                news: {
                    news: news.news.filter((article: interfaces.IDataInterface) =>
                        article.category === catsort)
                }
            };
        }

        if( searchTextInLowerCase ){
            return {
                news: {news: news.news.filter((article: interfaces.IDataInterface) =>
                        article.description.toLowerCase().includes(searchTextInLowerCase) ||
                        article.title.toLowerCase().includes(searchTextInLowerCase))}
            }
        }

    });
