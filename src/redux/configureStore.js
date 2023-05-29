import { ConfigureStore } from '@reduxjs/toolkit';
import { Reducer, initialState } from './reducer';
import { toggleModal } from './modalSlice';

export const ConfigureStore = () => {
    const store = configureStore({
        reducer: { 
        ...initialState,
        modal: toggleModal,
        },
})

    return store
}