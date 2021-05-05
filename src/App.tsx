import React, { useState } from 'react'
import './App.css'
import Board from './board/board';
import History from './history/history';

export default function App () {
  const [step, setStep] = useState(0),
        [next, setNext] = useState('X'),
        [stepStack, setStepStack] = useState<any []>([]),
        [valueArr, setValueArr]  = useState<String []>(new Array(9).fill('')),
        [winnerIndex, setWinnerIndex] = useState<any [] | undefined>([]),
        [stepCoordinates, setStepCoordinates] = useState<any []>([]);

        function _checkWin (valueArr: String []) {
          const checkIndex = [[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]];
          let winData = checkIndex.find((item) => {
                return valueArr[item[0]] === valueArr[item[1]] && valueArr[item[1]] === valueArr[item[2]] && valueArr[item[0]] !== '';
              });

          setWinnerIndex(winData);
          setValueArr(valueArr);
        }
      
        function handleClick (index: number) {
          if (valueArr[index]) {
            return;
          }
      
          stepCoordinates.push({
              X: index % 3,
              Y: Math.floor(index / 3)
          });

          setStepCoordinates(stepCoordinates);
          
          if (!winnerIndex || winnerIndex.length === 0) {
            valueArr[index] = next;
            setNext(next === 'X' ? 'O' : 'X');
            setStep(step + 1);
            setStepStack([...stepStack, valueArr]);
          }
      
          _checkWin(valueArr);
        }
      
        function chooseStep(newStep: number) {
          setStepStack(stepStack.slice(0, step));
          setValueArr(stepStack[step - 1]);
          setStepCoordinates(stepCoordinates.slice(0, step));
          let isChangeNext = (step - newStep) % 2 === 1;
 
          if (isChangeNext) {
            setNext(next === 'X' ? 'O' : 'X');
          }
      
          _checkWin(valueArr);
        }
      

  let results = [];
  if (winnerIndex && winnerIndex.length > 0) {
    results.push(
      <span>，获胜者为{valueArr[winnerIndex[0]]}</span>
    )
  }

  if (!winnerIndex && step === 9) {
    results.push(
      <span>，平局！</span>
    )
  }

  return (
    <>
      <div>已经走了{step}步，下一步轮到{next}走{results}</div>
      <Board winnerIndex = {winnerIndex} valueArr = {valueArr} onClick = {(index: number) => handleClick(index)}></Board>
      <History stepCoordinates={stepCoordinates} stepStack={stepStack} chooseStep={(step: number) => chooseStep(step)}></History>
    </>
  );     
}
