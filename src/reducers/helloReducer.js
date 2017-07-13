import { HELLO_WORLD } from "../actions/actionTypes.js";

const initState = { greet: '' };

export default function(state=initState, action){
    switch(action.type){
        case HELLO_WORLD:
        return { greet: 'Hello world' };

        default: return state;
    }
}