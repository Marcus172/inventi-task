import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { appendToNumber } from '../calculator/calculatorSlice';

type NumberButtonProps = {
  number: number
};

export function NumberButton({ number }: NumberButtonProps) {
  const dispatch = useDispatch();
  const numberCallback = useCallback(() => dispatch(appendToNumber(number)), [dispatch, number]);

  return (
    <div className="number" onClick={numberCallback}>
      {number}
    </div>
  );
}
