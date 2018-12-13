import React, { Component } from 'react';
import './Button.css'

class Button extends Component{

    render(){
        return(
            <button onClick={this.props.clickCallback} disabled={this.props.disabled} type="button">{this.props.destiny}</button>
        )
    }
}

export default Button;