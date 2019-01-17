import React, {Component, ReactNode} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {ApiService} from '../../services/ApiService.service';
import {IDataInterface} from "../../interfaces/data.Interface";
import Article from '../Article';
import { data } from './data';
import { getNews } from "../../actions";

class App extends Component <any, any> {
    public apiService = new ApiService();
    public  newsData = data;

    public componentDidMount(): void {
        this.props.getNews();
    }

    render() {
        const news = this.props.news.news.map((data: IDataInterface, i: number): ReactNode => {
            return <Article newsData={data} key={i}/>
        });
        return (
            <>
            <div className="sort-panel">
                <input type= "text"/>
                <div>A-Z</div>
                <select>
                    <option value="all">все</option>
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
export default connect(mapStateToProps,{getNews})(App);
