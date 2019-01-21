import { NewsActions } from '../actions';

const initialState = {searchText: ''};

export default (state: any = initialState, action: any) => {
    switch (action.type) {
        case NewsActions.SEARCH:
            return{
                ...state,
                searchText: action.payload
            };
        default :
            return state
    }

}