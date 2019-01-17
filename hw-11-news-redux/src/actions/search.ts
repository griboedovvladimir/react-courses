import { ActionCreator} from "redux";
import { NewsActions } from "./actions";

export const search: ActionCreator<any> = (text: string) => {
    return {
        type: NewsActions.SEARCH,
        payload: text
    }
};
