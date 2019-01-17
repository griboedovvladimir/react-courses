import { ActionCreator} from "redux";
import { NewsActions } from "./actions";

export const getNews: ActionCreator<any> = (news: any[]) => {
    return {
        type: NewsActions.GET_NEWS,
        payload: news
    }
};
