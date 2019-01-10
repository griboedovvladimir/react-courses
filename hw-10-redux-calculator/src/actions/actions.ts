import * as CONSTANTS from '../CONSTANTS';

export function addChar(char: string) {
    return {
        type: CONSTANTS.ADD_CHAR,
        char
    };
}

export function remember(number: number, operation: string) {
    return {
        type: CONSTANTS.REMEMBER_NUMBER_AND_OPERATION,
        number, operation
    };
}

export function clear() {
    return {
        type: CONSTANTS.CLEAR,
    };
}

export function clearCurrentNumber() {
    return {
        type: CONSTANTS.CLEAR_CURRENT_NUMBER,
    };
}

export function reset() {
    return {
        type: CONSTANTS.CLEAR_MEMORY,
    };
}