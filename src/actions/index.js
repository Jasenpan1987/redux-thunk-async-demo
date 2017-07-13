import { HELLO_WORLD, FETCH_JSON, FETCH_JSON_SUCCESS, FETCH_JSON_ERROR } from "./actionTypes";

export const getInitalText = () => ({ type: HELLO_WORLD });

export const fetchJson = () => {
    console.log('running...')
    const asyncFunc = async (dispatch) => {
        console.log('in async')
        dispatch({ type: FETCH_JSON });

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await response.json();

            dispatch({ type: FETCH_JSON_SUCCESS, payload: json });
        } catch (e) {
            dispatch({ type: FETCH_JSON_ERROR, payload: e.message })
        }
    }
    console.log(asyncFunc)
    return asyncFunc;
}

