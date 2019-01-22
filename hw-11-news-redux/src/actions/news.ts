import {ActionCreator} from 'redux';
import {NewsActions} from './actions';

export interface IGetNewsActon {
    type: string;
    payload: any[]
}

export const getNews: ActionCreator<IGetNewsActon> = (news: any[]) => {
    return {
        type: NewsActions.GET_NEWS,
        payload: news
    }
};
