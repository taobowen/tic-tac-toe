import React, { useState } from 'react'
import Square from '../square/square';

export default class Board extends React.Component <BoardProps, any> {
    constructor (props: BoardProps) {
      super (props);
    }

    renderSquare (index: number) {
        return (
            <Square value = {this.props.valueArr[index]} onClick = {() => this.props.onClick(index)}>

            </Square>
        )
    }
  
    render () {
      return (
        <div>
            <div>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
      );
    }
  }