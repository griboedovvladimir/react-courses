import {ActionCreator} from 'redux';
import {NewsActions} from './actions';
import {IDataInterface} from "../interfaces/interfaces";

export interface IGetNewsActon {
    type: string;
    payload: IDataInterface[]
}

export const getNews: ActionCreator<IGetNewsActon> = (news: IDataInterface[]) => {
    return {
        type: NewsActions.GET_NEWS,
        payload: news
    }
};
