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
      isWin: false
    }
  }

  checkWin (valueArr: String []): Boolean {
    const checkIndex = [[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]];
    return checkIndex.some((item) => {
      return valueArr[item[0]] === valueArr[item[1]] && valueArr[item[1]] === valueArr[item[2]] && valueArr[item[0]] !== '';
    })
  }

  handleClick (index: number) {
    if (this.state.valueArr[index]) {
      return;
    }
    
    let valueArr: String [] = [...this.state.valueArr],
        next: String = this.state.next,
        isWin: Boolean = this.checkWin(valueArr),
        step: number = this.state.step,
        stepStack = this.state.stepStack;

    if (!isWin) {
      valueArr[index] = this.state.next;
      next = this.state.next === 'X' ? 'O' : 'X';
      step ++;
      stepStack.push(valueArr);
    }
    
    this.setState({
      valueArr,
      next,
      isWin,
      step,
      stepStack
    });
  }

  chooseStep(step: number) {
    let stepStack = this.state.stepStack.slice(0, step),
        valueArr = this.state.stepStack[step - 1];

    this.setState({
      stepStack,
      valueArr
    })
  }

  render () {
    return (
      <>
        <div>已经走了{this.state.step}步，下一步轮到{this.state.next}走</div>
        <Board {...this.state} onClick = {(index: number) => this.handleClick(index)}></Board>
        <History stepStack={this.state.stepStack} chooseStep={(step: number) => this.chooseStep(step)}></History>
      </>
    );
  }
}
