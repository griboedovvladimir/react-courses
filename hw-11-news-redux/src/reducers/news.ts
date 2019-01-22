import { NewsActions } from '../actions';
import { data } from '../components/App/data'
import {IDataInterface} from '../interfaces/interfaces';
import {IGetNewsActon} from '../actions';

const initialState = {news: []};

export default (state: {news: Array<IDataInterface>} = initialState, action: IGetNewsActon) => {
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