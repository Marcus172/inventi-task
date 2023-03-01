import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Operation,
  selectAreOperationsEnabled,
  selectOperation,
} from '../calculator/calculatorSlice';

const operationsPropsMap = new Map<Operation, { id: string; character: string }>([
  [Operation.ADD, { id: 'plus', character: '+' }],
  [Operation.SUBTRACT, { id: 'minus', character: '-' }],
  [Operation.MULTIPLY, { id: 'multiplication', character: 'x' }],
]);

type OperatorButtonProps = {
  operation: Operation;
};

export function OperatorButton({ operation }: OperatorButtonProps) {
  const dispatch = useDispatch();
  const areOperationsEnabled = useSelector(selectAreOperationsEnabled);

  const operatorCallback = useCallback(
    () => areOperationsEnabled && dispatch(selectOperation(operation)),
    [areOperationsEnabled, operation, dispatch]
  );

  return (
    <div
      onClick={operatorCallback}
      className={`operator ${!areOperationsEnabled && 'disabled'}`}
      id={operationsPropsMap.get(operation)?.id}
    >
      {operationsPropsMap.get(operation)?.character}
    </div>
  );
}
