import React, { useState } from 'react';

export default class History extends React.Component <HistoryProps, any> {
    constructor (props: HistoryProps) {
      super (props);
    }
  
    render () {
        let stepText = this.props.stepStack.map((item , index: number) => {
            let step = index + 1;
            let {X, Y} = this.props.stepCoordinates[step - 1];
            return (
                <div key={index} onClick={() => this.props.chooseStep(step)}>第{step}步,({X},{Y})</div>
            )
        })

        return (
            <div>
                {stepText}
            </div>
        )
    }
}