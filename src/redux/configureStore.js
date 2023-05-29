import { ConfigureStore } from @reduxjs/toolkit';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, 
        initialState
    )

    return store
}