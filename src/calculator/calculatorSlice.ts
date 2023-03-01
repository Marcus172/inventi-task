import { createSlice, configureStore } from '@reduxjs/toolkit';

export enum Operation {
  ADD,
  SUBTRACT,
  MULTIPLY,
}

type CalculatorState = {
  result: number | null;
  operation: Operation | null;
  previousInput: string;
  currentInput: string;
};

const initialState: CalculatorState = {
  result: null,
  operation: null,
  previousInput: '',
  currentInput: '',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    appendToNumber: (state, action) => {
      if (state.result != null) {
        state.result = null;
      }

      state.currentInput += action.payload;
    },
    clear: (state) => {
      state.result = null;
      state.currentInput = '';
      state.previousInput = '';
    },
    selectOperation: (state, action) => {
      state.operation = action.payload;
      state.previousInput = state.currentInput;
      state.currentInput = '';
    },
    calculate: (state) => {
      const leftNumber = parseFloat(state.previousInput);
      const rightNumber = parseFloat(state.currentInput);

      switch (state.operation) {
        case Operation.ADD:
          state.result = leftNumber + rightNumber;
          break;
        case Operation.SUBTRACT:
          state.result = leftNumber - rightNumber;
          break;
        case Operation.MULTIPLY:
          state.result = leftNumber * rightNumber;
          break;
      }

      state.previousInput = '';
      state.currentInput = '';
    },
  },
});

export const selectResult = ({ result, currentInput, previousInput }: CalculatorState) => {
  return result ?? (currentInput.length > 0 ? currentInput : previousInput);
};

export const selectAreOperationsEnabled = ({ currentInput, previousInput }: CalculatorState) => {
  return previousInput.length === 0 && currentInput.length > 0;
};

export const selectIsEqualsEnabled = ({
  currentInput,
  previousInput,
  operation,
}: CalculatorState) => {
  return previousInput.length > 0 && currentInput.length > 0 && operation != null;
};

export const { appendToNumber, clear, selectOperation, calculate } = calculatorSlice.actions;

export const calculatorStore = configureStore({
  reducer: calculatorSlice.reducer,
});
