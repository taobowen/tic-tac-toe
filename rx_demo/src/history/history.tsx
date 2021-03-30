import React, { useState } from 'react';

export default class History extends React.Component <HistoryProps, any> {
    constructor (props: HistoryProps) {
      super (props);
    }
  
    render () {
        let stepText = this.props.stepStack.map((item , index: number) => {
            return (
                <div onClick={() => this.props.chooseStep}>第{index + 1}步</div>
            )
        })
        return (
            <div>
                {stepText}
            </div>
        )
    }
}