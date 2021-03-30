import React, { useState } from 'react';
import './Square.css'

export default class Square extends React.Component <SquareProps, any> {
    constructor (props: SquareProps) {
      super (props);
    }
  
    render () {
      return (
        <span className="square" onClick={() => this.props.onClick()}>
            {this.props.value}
        </span>
      );
    }
}