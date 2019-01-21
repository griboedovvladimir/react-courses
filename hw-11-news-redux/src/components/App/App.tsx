import React, {Component, ReactNode} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {ApiService} from '../../services/ApiService.service';
import {IDataInterface} from "../../interfaces/data.Interface";
import { searchNewsSelector } from "../../selectors";
import Article from '../Article';
import { data } from './data';
import * as actions from "../../actions";
import { NewsActions } from '../../actions';



class App extends Component <any, any> {
    public apiService = new ApiService();
    public  newsData = data;

    public componentDidMount(): void {
        this.props.getNews();
    }

    private handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.search(event.target.value);
    };

    private sortAsc = () =>{
        this.props.sort(NewsActions.SORT_ASC);
    };

    private sortDesc = () =>{
        this.props.sort(NewsActions.SORT_DESC);
    };


    render() {
        const news = this.props.news.news.map((data: IDataInterface, i: number): ReactNode => {
            return <Article key={i} newsData={data}/>
        });
        return (
            <>
            <div className="sort-panel">
                <input onChange={ this.handleSearch }
                       type= "text"/>
                <div><button onClick={this.sortAsc}>A-Z</button><button onClick={this.sortDesc}>Z-A</button></div>
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


const mapStateToProps = (state: any) => searchNewsSelector(state);
export default connect(mapStateToProps,{...actions})(App);
