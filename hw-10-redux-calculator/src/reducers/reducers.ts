import * as CONSTANTS from '../CONSTANTS';

const InitialState = {
    currentChar: '0',
    memory: '',
    operation: '',
};

interface IActions {
    type:string;
    number?: number;
    char?:string;
    operation?:string;
}

export function caclculate(state = InitialState, action: any) {
    if (action.type === CONSTANTS.ADD_CHAR) {
        return {
            ...state, currentChar: state.currentChar + action.char
        };
    }
    if (action.type === CONSTANTS.REMEMBER_NUMBER_AND_OPERATION)
        return {
            ...state, memory: action.number, operation: action.operation
        };
    if (action.type === CONSTANTS.CLEAR_CURRENT_NUMBER)
        return {
            ...state, currentChar: ''
        };
    if (action.type === CONSTANTS.CLEAR)
        return {
            currentChar: '',
            memory: '',
            operation: '',
        };
    if (action.type === CONSTANTS.CLEAR_MEMORY)
        return {
            currentChar: '0',
            memory: '',
            operation: '',
        };
    return state;
}