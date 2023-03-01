import React from 'react';
import { Provider } from 'react-redux';
import { calculatorStore } from './calculator/calculatorSlice';
import { Calculator } from './components/Calculator';

export default function App() {
  return (
    <Provider store={calculatorStore}>
      <div className="App">
        <Calculator />
      </div>
    </Provider>
  );
}
