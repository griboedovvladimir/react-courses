import { NewsActions } from '../actions';
import { data } from '../components/App/data'

const initialState = {news: []};

export default (state: any = initialState, action: any) => {
    switch (action.type) {
        case NewsActions.GET_NEWS:
            return{
                ...state,
                news: data
            };
        default :
            return state
    }

}