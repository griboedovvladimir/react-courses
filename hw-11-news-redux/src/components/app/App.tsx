import React, {Component, ReactNode} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {ApiService} from '../../services/ApiService.service';
import {IDataInterface} from "../../interfaces/data.Interface";
import Article from '../article';
import { data } from './data';

class App extends Component <any, any> {
    public apiService = new ApiService();
    public state = {newsData: []};
    public  newsData = data;

    public componentDidMount(): void {
        this.setState({newsData: this.newsData})
    }

    render() {
        const news = this.state.newsData.map((data: IDataInterface, i: number): ReactNode => {
            return <Article newsData={data} key={i}/>
        });
        return (
            <>
            <div className="sort-panel">
                <input type= "text"/>
                <div>A-Z</div>
                <select>
                    <option selected value="all">все</option>
                    <option value="peaple">люди</option>
                    <option value="авто">авто</option>
                    <option value="технологии">технологии</option>
                    <option value="недвижимость">недвижимость </option>
                </select>
            </div>
            <div className="App">
                <div id="newsWrapper" className="content-wrapper">
                    {news}
                </div>
            </div>
                </>
        );
    }
}


const mapStateToProps = (state: any) => state;
export default connect(mapStateToProps, {...actions})(App);
