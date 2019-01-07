import React, {Component} from 'react';
import StoreService from "../../services/store.service";
import './Summary.css';


class Summary extends Component {
    render() {
        let list = Object.keys(StoreService.getStore()).map((el, i) => <li
            key={i}><span>{el}</span> : {StoreService.getStore()[el]}</li>);
        return (
            <div id="form">
                <h2>Your choice:</h2>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default Summary;