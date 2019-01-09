import React, { Component } from 'react';
import './App.css';

class App extends Component {
  public buttons = [
      {symbol:'1',operation:''},
      {symbol:'2',operation:''},
      {symbol:'3',operation:''},
      {symbol:'4',operation:''},
      {symbol:'5',operation:''},
      {symbol:'6',operation:''},
      {symbol:'7',operation:''},
      {symbol:'8',operation:''},
      {symbol:'9',operation:''},
      {symbol:'0',operation:''},
      {symbol:'+',operation:'sum'},
      {symbol:'-',operation:'subtract'},
      {symbol:'/',operation:'division'},
      {symbol:'*',operation:'multiply'},
      {symbol:'=',operation:'equal'},
      {symbol:'C',operation:'clear'}
  ];
  render() {
    let buttons = this.buttons.map((btn, i)=><button type="button" key={i}>{btn.symbol}</button>);
    return (
      <div className="calculator">
{buttons}
      </div>
    );
  }
}

export default App;
