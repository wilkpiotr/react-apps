import React, { Fragment } from 'react';

const SingleArticle = (props) => {
    return(
        <Fragment>
            <h1 className="title ">{props.article.title}</h1>
            <p>{props.article.text}</p>
        </Fragment>
    )
}

export default SingleArticle