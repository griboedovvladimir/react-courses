import React, {Component, ReactNode} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {ApiService} from '../../services/ApiService.service';
import {IDataInterface} from "../../interfaces/interfaces";
import {searchNewsSelector} from "../../selectors";
import Article from '../Article';
import {data} from './data';
import * as actions from "../../actions";
import {NewsActions} from '../../actions';
import {IStoreInterface} from "../../interfaces/interfaces";

interface IAppProps {
    getNews: () => void;
    search: (text: string) => void;
    catsort: (text: string) => void;
    sort: (text: string) => void;
    news: {news: IDataInterface[]}
}


class App extends Component <IAppProps> {
    public apiService = new ApiService();
    public newsData = data;

    public componentDidMount(): void {
        this.props.getNews();
    }

    private handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.props.search(event.target.value);
    };

    private handleCategorySelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        this.props.catsort(event.target.value);
    };

    private sortAsc = (): void => {
        this.props.sort(NewsActions.SORT_ASC);
    };

    private sortDesc = (): void => {
        this.props.sort(NewsActions.SORT_DESC);
    };


    public render(): ReactNode {
        const news = this.props.news.news.map((data: IDataInterface, i: number): ReactNode => {
            return <Article key={i} newsData={data}/>
        });
        return (
            <>
                <div className="sort-panel">
                    <input onChange={this.handleSearch}
                           type="text"/>
                    <div>
                        <button onClick={this.sortAsc}>A-Z</button>
                        <button onClick={this.sortDesc}>Z-A</button>
                    </div>
                    <select onChange={this.handleCategorySelect}>
                        <option value="all">все</option>
                        <option value="people">люди</option>
                        <option value="auto">авто</option>
                        <option value="tech">технологии</option>
                        <option value="realt">недвижимость</option>
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


const mapStateToProps = (state: IStoreInterface) => searchNewsSelector(state);
export default connect(mapStateToProps, {...actions})(App);
