export function caclculate(state = {currentChar:'0'}, action: any) {
    if(action.type==='addChar'){
        return {
            currentChar: state.currentChar + action.char
        };
    }
    return state;
}