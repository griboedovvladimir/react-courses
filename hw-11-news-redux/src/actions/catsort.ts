import { ActionCreator} from 'redux';
import { NewsActions } from './actions';

export interface ICatSortAction {
    type: string;
    payload: string;
}

export const catsort: ActionCreator<ICatSortAction> = (category: string) => {
    return {
        type: NewsActions.SORT_BY_CATEGORY,
        payload: category
    }
};
