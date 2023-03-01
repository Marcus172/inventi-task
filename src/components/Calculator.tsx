import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles.css';
import { NumberButton } from './NumberButton';
import { appendToNumber, clear, Operation, selectResult } from '../calculator/calculatorSlice';
import { OperatorButton } from './OperatorButton';
import { EqualsButton } from './EqualsButton';

export function Calculator() {
  const dispatch = useDispatch();
  const result = useSelector(selectResult);

  const clearCallback = useCallback(() => dispatch(clear()), [dispatch]);
  const dotCallback = useCallback(() => dispatch(appendToNumber('.')), [dispatch]);

  return (
    <div className="calculator">
      <div className="input" id="input">
        {result}
      </div>

      <div className="buttons">
        <div className="operators">
          <OperatorButton operation={Operation.ADD} />
          <OperatorButton operation={Operation.SUBTRACT} />
          <OperatorButton operation={Operation.MULTIPLY} />
          <div>&nbsp;</div>
        </div>
        <div className="leftPanel">
          {[
            [7, 8, 9],
            [4, 5, 6],
            [1, 2, 3],
          ].map((nums) => (
            <div key={`button_${nums}`} className="numbers">
              {nums.map((n) => (
                <NumberButton key={`button_${n}`} number={n} />
              ))}
            </div>
          ))}
          <div className="numbers">
            <NumberButton number={0} />
            <div onClick={dotCallback} className="number">
              .
            </div>
            <div onClick={clearCallback} id="clear">
              CE
            </div>
          </div>
        </div>
        <EqualsButton />
      </div>
    </div>
  );
}
