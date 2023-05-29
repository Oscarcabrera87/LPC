import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { modals } from './modals';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalOpen: false,
  },
  reducers: {},
});

modalSlice.reducer = (state, action) => {
  switch (action.type) {
    case 'toggleModal':
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
  }
}

export const { toggleModal } = modalSlice.actions;
