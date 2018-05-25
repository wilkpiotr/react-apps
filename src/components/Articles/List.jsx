import React from 'react';

const List = (props) => {

    return(
        <ul className="article-list menu-list">
            {props.articles.map((article) => {
                return <li key={article.id} id={article.id} onClick={() => props.onSelectArticle(article.id)}><a>{article.title}</a></li>
            })}
        </ul> 
    )
}

export default List;