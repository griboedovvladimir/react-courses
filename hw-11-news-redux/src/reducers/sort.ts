import {NewsActions} from '../actions';
import {ISortAction} from "../actions";

const initialState = {sortBy: ''};

export default (state: { sortBy: string } = initialState, action: ISortAction) => {
    switch (action.type) {
        case NewsActions.SORT:
            return {
                ...state,
                sortBy: action.payload
            };
        default :
            return state
    }

}