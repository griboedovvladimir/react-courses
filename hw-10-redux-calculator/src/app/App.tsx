import React, {Component} from 'react';
import './App.css';
import {bindActionCreators, Dispatch} from "redux";
import * as actions from '../actions/actions'
import {connect} from 'react-redux';
import {buttons} from './buttons'

class App extends Component <any, {}> {
    public buttons = buttons;

    calculate(operation: string): number {
        const A = this.props.caclculator.memory;
        const B = Number(this.props.caclculator.currentNumberString);
        let result: number;
        switch (operation) {
            case 'sum':
                result = A + B;
                break;
            case 'subtract':
                result = A - B;
                break;
            case 'multiply':
                result = A * B;
                break;
            case 'division':
                result = A / B;
                break;
            default:
                result = 0;
        }
        return result;
    }

    operationInit(): void {
        const rememberedOperation = this.props.caclculator.operation;
        const actions = this.props.action;
        actions.clear();
        this.calculate(rememberedOperation).toString().length > 13
            ? actions.addChar(this.calculate(rememberedOperation).toString().slice(0, 12))
            : actions.addChar(this.calculate(rememberedOperation));
    }

    buttonsHandler(button: any): void {
        const operation = this.buttons[button.id].operation;
        const currentNumber = Number(this.props.caclculator.currentNumberString);
        const symbol = this.buttons[button.id].symbol;
        const rememberedNumber = this.props.caclculator.memory;
        const rememberedOperation = this.props.caclculator.operation;
        const actions = this.props.action;
        const buttonIsOperation = (operation !== 'equal') && (operation !== 'clear');

        if (!operation && currentNumber === 0) {
            actions.clearCurrentNumber();
            actions.addChar(symbol);
        }
        if (!operation && currentNumber !== 0) {
            actions.addChar(symbol);
        }
        if (operation && buttonIsOperation && operation === rememberedOperation) {
            this.operationInit();
        }
        if (operation && buttonIsOperation) {
            actions.remember(currentNumber, operation)
        }
        if (operation === 'clear') {
            actions.reset();
        }
        if (operation === 'equal' && currentNumber !== 0 && rememberedOperation) {
            this.operationInit()
        }
        if (!operation && rememberedOperation && currentNumber === rememberedNumber) {
            actions.clearCurrentNumber();
            actions.addChar(symbol);
        }
    }


    clickHandler = (e: any) => {
        if (e.target && e.target.type === 'button' &&
            (this.props.caclculator.currentNumberString.length + 1 < 14 || this.buttons[e.target.id].symbol === 'C')) {
            this.buttonsHandler(e.target);
        }
    };

    public render(): React.ReactNode {
        let buttons = this.buttons.map((btn, i) => <button type="button" id={i.toString()}
                                                           key={i}>{btn.symbol}</button>);
        return (
            <div className="calculator">
                <div className="screen">{this.props.caclculator.currentNumberString}</div>
                <div className="buttons" onClick={this.clickHandler}>
                    {buttons}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: {}) => state;
const mapDispatchToProps = (dispatch: Dispatch) => ({
    action: bindActionCreators({...actions}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


