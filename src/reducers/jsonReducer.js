import { FETCH_JSON_SUCCESS, FETCH_JSON, FETCH_JSON_ERROR } from "../actions/actionTypes.js";

const initState = {};

export default function (state=initState, action) {
    switch (action.type) {
        case FETCH_JSON:
        return { status: 'pending' };

        case FETCH_JSON_SUCCESS:
        return { status: 'success', data: action.payload };

        case FETCH_JSON_ERROR:
        return { status: 'error', error: action.payload};

        default:
        return state;
    }
}