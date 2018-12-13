import React, { Component } from 'react';

class ModelChoice extends Component{
    render(){
return (
    <form id="form">
        <label htmlFor="model">Choice model</label>
        <select name="model" id="model">
            {/*${options}*/}
        </select>
    </form>
)
    }
}
export default ModelChoice;