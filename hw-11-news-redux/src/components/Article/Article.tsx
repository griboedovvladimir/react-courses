import React from 'react';
import {IDataInterface} from "../../interfaces/data.Interface";

interface ArticlePropsTypes {
    key: number;
    newsData: IDataInterface;
}

const Article: React.FunctionComponent<ArticlePropsTypes> = ({key, newsData}) => {
    return (
        <div className="news-wrapper">
            <img alt="news" className="news-img" src={newsData.img}/>
            <a className="news-title" href={newsData.link}>{newsData.title}</a>
            <div className="news-description">{newsData.description}</div>
        </div>
    )
};

export default Article;