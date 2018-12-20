import React, {Component} from 'react';
import './App.css';
import Menu from '../menu';
import {ApiService} from '../../services/ApiService.service';
import Article from '../article';
import {DataInterface} from "../../interfaces/data.Interface";

class App extends Component {
    public apiService = new ApiService();
    public state = {
        newsData: [],
        showPreloader: false
    };

    public componentDidMount(): void {
        this.getNewsData('people');
    }

    switchInit = (id: string): void => {
        this.getNewsData(id);
    };

    public getNewsData(id: string): void {
        this.setState({showPreloader: true});
        this.apiService.getNews(id).then(newsData => {
            this.setState({newsData: newsData, showPreloader: false});
        });
    }

    public render() {
        const news = this.state.newsData.map((data: DataInterface, i: number) => {
            return <Article key={i} newsData={data}/>
        });
        return (
            <div className="App">
                {this.state.showPreloader && <img id="preloader" src="preloader.svg"/>}
                <header className="App-header">
                    <Menu doSwitch={this.switchInit}/>
                </header>
                <div id="newsWrapper" className="content-wrapper">
                    {news}
                </div>
            </div>
        );
    }
}

export default App;

