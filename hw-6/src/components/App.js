import React, {Component} from 'react';
import './App.scss';
import Menu from "./menu/Menu";
import {ApiService} from "../services/ApiService.service";
import {guid} from "../helpers/guid";
import Article from "./article/Article";

class App extends Component {
    constructor() {
        super();
        this.state = {
            newsData: []
        };
        this.apiService = new ApiService();
        this.getNewsData('people');
    }

    switchInit = (id) => {
        this.getNewsData(id);
    };

    initPreloader() {
        const preloader = new Image(200, 200);
        preloader.src = 'preloader.svg';
        preloader.id = 'preloader';
        document.body.appendChild(preloader);
    }

    removePreloader() {
        document.getElementById('preloader').remove();
    }

    getNewsData(id) {
        this.initPreloader();
        this.apiService.getNews(id).then(newsData => {
            this.setState({newsData: newsData});
            this.removePreloader();
        });
    }

    render() {
        let news = this.state.newsData.map(data => {
            return <Article key={guid()} newsData={data}/>
        });
        return (
            <div className="App">
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
