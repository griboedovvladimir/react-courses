import React, {FC} from 'react';
import StoreService from "../../services/store.service";
import './Summary.css';


const Summary:FC = () => {
    const storeService = new StoreService();
        let list = Object.keys(storeService.getStore()).map((el, i) => <li
            key={i}><span>{el}</span> : {storeService.getStore()[el]}</li>);
        return (
            <div id="form">
                <h2>Your choice:</h2>
                <ul>
                    {list}
                </ul>
            </div>
        )
};

export default Summary;