import React, { Component } from 'react';
import StoreService from "../../services/store.service";

class ModelChoice extends Component{
    constructor(){
        super();
      this.selectedModel = StoreService.getStore() ? StoreService.getStore().model : null;
    }

    componentDidMount(){
        if(this.selectedModel){
            this.props.changeUndisabled();
        }
    }

    addToStore = (e) => {
        StoreService.addToStore({model: e.target.value});
    };

    focusEvents = (e) => {
        this.addToStore(e);
        this.props.changeUndisabled();
    };

    render(){
        let options = this.props.renderData.map((model, i) => <option key={i}>{model}</option>);
        return (
            <form onFocus={this.focusEvents} id="form">
                <label htmlFor="model">Choice model</label>
                <select defaultValue={this.selectedModel} onChange={this.addToStore} name="model" id="model">
                    ${options}
                </select>
            </form>
        )
    }
}
export default ModelChoice;