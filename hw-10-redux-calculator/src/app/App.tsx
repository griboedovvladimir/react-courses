import React, {Component} from 'react';
import './App.css';
import {bindActionCreators, Dispatch} from "redux";
import * as actions from '../actions/actions'
import {connect} from "react-redux";
import {buttons} from './buttons'

class App extends Component <any, any> {
    public buttons = buttons;

    calculate(operation: string) {
        const A = this.props.caclculate.memory;
        const B = parseInt(this.props.caclculate.currentChar);

        if (operation === 'sum') {
            return A + B;
        }
        if (operation === 'subtract') {
            return A - B;
        }
        if (operation === 'multiply') {
            return A * B;
        }
        if (operation === 'division') {
            return A / B;
        }
    }

    buttonsHandler(button: any) {
        const operation = this.buttons[button.id].operation;
        const currentNumber = parseInt(this.props.caclculate.currentChar);
        const symbol = this.buttons[button.id].symbol;
        const rememberedNumber = this.props.caclculate.memory;
        const rememberedOperation = this.props.caclculate.operation;
        const actions = this.props.action;

        if (!operation) {
            actions.addChar(symbol);
        }
        if (operation && (operation !== 'equal') && (operation !== 'clear') && (operation === rememberedOperation)) {
            actions.clear();
            actions.addChar(this.calculate(rememberedOperation));
        }
        if (operation && (operation !== 'equal') && (operation !== 'clear')) {
            actions.remember(currentNumber, operation)
        }
        if (operation === 'clear') {
            actions.reset();
        }
        if (operation === 'equal' && currentNumber !== 0 && rememberedOperation) {
            actions.clear();
            actions.addChar(this.calculate(rememberedOperation));
        }
        if (!operation && rememberedOperation && currentNumber === rememberedNumber) {
            actions.clearCurrentNumber();
            actions.addChar(symbol);
        }
    }


    clickHandler = (e: any) => {
        if (e.target && e.target.type === 'button' &&
            (this.props.caclculate.currentChar.length + 1 < 14 || this.buttons[e.target.id].symbol === 'C')) {
            this.buttonsHandler(e.target);
        }
    };

    render() {
        let buttons = this.buttons.map((btn, i) => <button type="button" id={i.toString()}
                                                           key={i}>{btn.symbol}</button>);
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

const mapStateToProps = (state: any) => state;
const mapDispatchToProps = (dispatch: Dispatch) => ({
    action: bindActionCreators({...actions}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


