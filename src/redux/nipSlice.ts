
import { FlowStatus, FlowStep, NipState } from '@/app/model/NipState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: NipState = {
  step: 'interlocutor',
  fluxoStatus: 'success',
  showModal: false,
  answered: false,
  userData: {
    nome: '',
    email: '',
    telefone: '',
  },
};

const nipSlice = createSlice({
  name: 'nip',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<FlowStep>) => {
      state.step = action.payload;
    },
    setFluxoStatus: (state, action: PayloadAction<FlowStatus>) => {
      state.fluxoStatus = action.payload;
    },
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setAnswered: (state, action: PayloadAction<boolean>) => {
      state.answered = action.payload;
    },
    setUserData: (
      state,
      action: PayloadAction<{ nome: string; email: string; telefone: string }>
    ) => {
      state.userData = action.payload;
    },
  },
});

export const {
  setStep,
  setFluxoStatus,
  setShowModal,
  setAnswered,
  setUserData,
} = nipSlice.actions;

export default nipSlice.reducer;

