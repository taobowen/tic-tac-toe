import React, { useState } from 'react';
import './Square.css'

export default class Square extends React.Component <SquareProps, any> {
    constructor (props: SquareProps) {
      super (props);
    }
  
    render () {
      let {squareIndex, winnerIndex, value} = this.props;
      return (
        <span 
          key={squareIndex} 
          className="square" 
          style={{fontWeight: winnerIndex?.includes(squareIndex) ? 800 : 400}} 
          onClick={() => this.props.onClick()}
        >
            {value}
        </span>
      );
    }
}