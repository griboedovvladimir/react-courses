import {NewsActions} from '../actions';
import {ISearchAction} from "../actions";

const initialState = {searchText: ''};

export default (state: { searchText: string } = initialState, action: ISearchAction) => {
    switch (action.type) {
        case NewsActions.SEARCH:
            return {
                ...state,
                searchText: action.payload
            };
        default :
            return state
    }

}