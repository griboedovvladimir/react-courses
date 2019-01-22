import {NewsActions} from '../actions';
import {ICatSortAction} from '../actions';

const initialState = {catsort: ''};

export default (state: { catsort: string } = initialState, action: ICatSortAction) => {
    switch (action.type) {
        case NewsActions.SORT_BY_CATEGORY:
            return {
                ...state,
                catsort: action.payload
            };
        default :
            return state
    }

}