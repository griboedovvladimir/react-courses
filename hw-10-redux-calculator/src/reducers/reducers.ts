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

export function caclculator(state: IState = InitialState, action: IActions): IState {
    let newState = state;
    switch (action.type) {
        case CONSTANTS.ADD_CHAR:
            newState = {
                ...state, currentNumberString: state.currentNumberString + action.char
            };
            break;
        case CONSTANTS.REMEMBER_NUMBER_AND_OPERATION:
            newState = {
                ...state, memory: action.number, operation: action.operation
            };
            break;
        case CONSTANTS.CLEAR_CURRENT_NUMBER:
            newState = {
                ...state, currentNumberString: ''
            };
            break;
        case CONSTANTS.CLEAR:
            newState = {
                currentNumberString: '',
                memory: 0,
                operation: '',
            };
            break;
        case CONSTANTS.CLEAR_MEMORY:
            newState = {
                currentNumberString: '0',
                memory: 0,
                operation: '',
            };
            break;
    }

    return newState;
}