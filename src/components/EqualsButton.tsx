import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsEqualsEnabled, calculate } from '../calculator/calculatorSlice';

export function EqualsButton() {
  const dispatch = useDispatch();
  const isEqualsEnabled = useSelector(selectIsEqualsEnabled);

  const equalsCallback = useCallback(
    () => isEqualsEnabled && dispatch(calculate()),
    [isEqualsEnabled, dispatch]
  );

  return (
    <div onClick={equalsCallback} className={`equal ${!isEqualsEnabled && 'disabled'}`} id="result">
      =
    </div>
  );
}
