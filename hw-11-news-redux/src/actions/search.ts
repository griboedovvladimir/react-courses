import { ActionCreator} from "redux";
import { NewsActions } from "./actions";

export interface ISearchAction {
    type: string;
    payload: string;
}

export const search: ActionCreator<ISearchAction> = (text: string) => {
    return {
        type: NewsActions.SEARCH,
        payload: text
    }
};
