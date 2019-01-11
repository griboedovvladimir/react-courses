import * as CONSTANTS from '../CONSTANTS';

const InitialState = {
    currentNumberString: '0',
    memory: 0,
    operation: '',
};

interface IActions {
    type: string;
    number?: number;
    char?: string;
    operation: string;
}

interface IState {
    currentNumberString: string;
    memory: number | undefined;
    operation: string;
}

export function calculator(state: IState = InitialState, action: IActions): IState {
    switch (action.type) {
        case CONSTANTS.ADD_CHAR:
             return {
                ...state, currentNumberString: state.currentNumberString + action.char
            };
        case CONSTANTS.REMEMBER_NUMBER_AND_OPERATION:
            return {
                ...state, memory: action.number, operation: action.operation
            };
        case CONSTANTS.CLEAR_CURRENT_NUMBER:
            return {
                ...state, currentNumberString: ''
            };
        case CONSTANTS.CLEAR:
            return {
                currentNumberString: '',
                memory: 0,
                operation: '',
            };
        case CONSTANTS.CLEAR_MEMORY:
            return {
                currentNumberString: '0',
                memory: 0,
                operation: '',
            };
        default:
            return state;
    }
}