import React, {Component, ReactNode}  from 'react';

class Article extends Component {
    public props: any;

    constructor(props: any) {
        super(props);
    }

    public render(): ReactNode {
        return (
            <div className="news-wrapper">
                <img alt="news" className="news-img" src={this.props.newsData.img}/>
                <a className="news-title" href={this.props.newsData.link}>{this.props.newsData.title}</a>
                <div className="news-description">{this.props.newsData.description}</div>
            </div>
        )
    }
}

export default Article;