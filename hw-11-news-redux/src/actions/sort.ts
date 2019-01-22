import { ActionCreator} from 'redux';
import { NewsActions } from './actions';

export interface ISortAction {
    type: string;
    payload: string;
}

export const sort: ActionCreator<ISortAction> = (sortBy: string) => {
    return {
        type: NewsActions.SORT,
        payload: sortBy
    }
};
