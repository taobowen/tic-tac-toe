import React, { useState } from 'react'
import './App.css'
import Board from './board/board';
import History from './history/history';

export default class App extends React.Component <any, AppState> {
  constructor (props: any) {
    super (props);
    this.state = {
      step: 0,
      next: 'X',
      stepStack: [],
      valueArr: new Array(9).fill(''),
      winnerIndex: [],
      stepCoordinates: []
    }
  }

  _checkWin (valueArr: String []) {
    const checkIndex = [[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]];
    let winData = checkIndex.find((item) => {
          return valueArr[item[0]] === valueArr[item[1]] && valueArr[item[1]] === valueArr[item[2]] && valueArr[item[0]] !== '';
        });
    
    this.setState({
      winnerIndex: winData,
      valueArr
    });
  }

  handleClick (index: number) {
    if (this.state.valueArr[index]) {
      return;
    }
    
    let valueArr: String [] = [...this.state.valueArr],
        next: String = this.state.next,
        step: number = this.state.step,
        stepStack = this.state.stepStack,
        stepCoordinates = this.state.stepCoordinates;

    stepCoordinates.push({
        X: index % 3,
        Y: Math.floor(index / 3)
    })
    
    if (!this.state.winnerIndex || this.state.winnerIndex.length === 0) {
      valueArr[index] = this.state.next;
      next = this.state.next === 'X' ? 'O' : 'X';
      step ++;
      stepStack.push(valueArr);
    }

    this._checkWin(valueArr);
    
    this.setState({
      valueArr,
      next,
      step,
      stepStack,
      stepCoordinates
    });
  }

  chooseStep(step: number) {
    let stepStack = this.state.stepStack.slice(0, step),
        valueArr = this.state.stepStack[step - 1],
        isChangeNext = (this.state.step - step) % 2 === 1,
        next = this.state.next,
        stepCoordinates = this.state.stepCoordinates.slice(0, step);
        
    if (isChangeNext) {
      next = this.state.next === 'X' ? 'O' : 'X';
    }

    this.setState({
      stepStack,
      valueArr,
      step,
      next,
      stepCoordinates
    })

    this._checkWin(valueArr);
  }

  render () {
    let results = [],
        {winnerIndex, valueArr, step, next, stepStack, stepCoordinates} = this.state;
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
        <Board {...this.state} onClick = {(index: number) => this.handleClick(index)}></Board>
        <History stepCoordinates={stepCoordinates} stepStack={stepStack} chooseStep={(step: number) => this.chooseStep(step)}></History>
      </>
    );
  }
}
