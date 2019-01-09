import React, { Component } from 'react';
import './App.css';
import {bindActionCreators, Dispatch} from "redux";
import * as actions from '../actions/actions'
import {connect} from "react-redux";

class App extends Component <any, any>{
  public buttons = [
      {symbol:'1',operation:''},
      {symbol:'2',operation:''},
      {symbol:'3',operation:''},
      {symbol:'+',operation:'sum'},
      {symbol:'4',operation:''},
      {symbol:'5',operation:''},
      {symbol:'6',operation:''},
      {symbol:'-',operation:'subtract'},
      {symbol:'7',operation:''},
      {symbol:'8',operation:''},
      {symbol:'9',operation:''},
      {symbol:'*',operation:'multiply'},
      {symbol:'C',operation:'clear'},
      {symbol:'0',operation:''},
      {symbol:'=',operation:'equal'},
      {symbol:'/',operation:'division'},
  ];


    clickHandler = (e:any) => {
        if(e.target.type==='button' && !this.buttons[e.target.id].operation){
            this.props.action.addChar(e.target.innerHTML);
        }
        if(e.target.type==='button' && this.buttons[e.target.id].operation){

        }
    };

  render() {
    let buttons = this.buttons.map((btn, i)=><button type="button" id={i.toString()} key={i}>{btn.symbol}</button>);
    return (
      <div className="calculator">
          <div className="screen">{parseInt(this.props.caclculate.currentChar)}</div>
          <div className="buttons" onClick={this.clickHandler}>
{buttons}
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any, OwnProps: any) => ({
    ...state, ...OwnProps
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    action: bindActionCreators({...actions}, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(App);


