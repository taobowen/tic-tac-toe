import React, { useState } from 'react'
import Square from '../square/square';

export default class Board extends React.Component <BoardProps, any> {
    constructor (props: BoardProps) {
      super (props);
    }

    renderSquare (index: number) {
        let { winnerIndex } = this.props;
        return (
            <Square key={index} squareIndex={index} winnerIndex = {winnerIndex} value = {this.props.valueArr[index]} onClick = {() => this.props.onClick(index)}>

            </Square>
        )
    }
  
    render () {
        let blocks = [];
        for (let i = 0; i < 3; i ++) {
            let blockRow = [];

            for (let j = 0; j < 3; j++) {
                blockRow.push(this.renderSquare(i * 3 + j));
            }

            blocks.push(
                <div key={i}>
                    {blockRow}
                </div>
            )
        }
        
        return (
            <div>
                {blocks}
            </div>
        );
    }
}