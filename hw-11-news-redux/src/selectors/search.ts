import { createSelector } from 'reselect';


const newsSelector = (state: any) => state.news;
const searchTextSelector = (state: any) => state.search.searchText;
const sortSelector = (state: any) => state.sort.sortBy;

export const searchNewsSelector = createSelector(newsSelector, searchTextSelector, sortSelector,
    (news, searchText, sort) => {
        const searchTextInLowerCase = searchText.toLowerCase();

        return {
            news: searchTextInLowerCase === '' ?
                news :
                {news: news.news.filter((article: any) =>
                    article.description.toLowerCase().includes(searchTextInLowerCase) ||
                    article.title.toLowerCase().includes(searchTextInLowerCase))}
        };
    });
