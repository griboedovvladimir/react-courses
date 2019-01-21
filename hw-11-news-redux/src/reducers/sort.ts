import { NewsActions } from '../actions';

const initialState = {sortBy: ''};

export default (state: any = initialState, action: any) => {
    switch (action.type) {
        case NewsActions.SORT:
            return{
                ...state,
                sortBy: action.payload
            };
        default :
            return state
    }

}