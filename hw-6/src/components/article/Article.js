import React, {Component} from 'react';
import './Article.scss';

class Article extends Component {

    constructor(props){
        super(props);
        this.props=props;
    }

    render(){
       return (
           <div className="news-wrapper">
               <img alt="news" className="news-img" src={this.props.newsData.img}/>
                   <a className="news-title" href={this.props.newsData.link}>{this.props.newsData.title}</a>
                   <div className="news-discription">{this.props.newsData.discription}</div>
           </div>
       )
    }
}

export default Article;