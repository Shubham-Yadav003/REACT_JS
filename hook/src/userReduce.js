

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}

function Appp() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Reducer example</h2>
            <p>Current count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
}

export default Appp;
