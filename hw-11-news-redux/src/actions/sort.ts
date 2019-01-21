import { ActionCreator} from 'redux';
import { NewsActions } from './actions';

export const sort: ActionCreator<any> = (sortBy: string) => {
    return {
        type: NewsActions.SORT,
        payload: sortBy
    }
};
