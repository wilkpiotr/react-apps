import React, { Fragment } from 'react';
import Loader from '../Loader';

const SingleArticle = (props) => {
    if (!props.loading && props.id === 0) {
        return (<div>
            <span style={{lineHeight: "180px"}}>What do you want to read about?</span> 
        </div>)
    } 
    else if (!props.loading && props.id !== 0) {
        return (<Fragment>
                <h1 className="title ">{props.article.title}</h1>
                <p>{props.article.text}</p>
            </Fragment>
        )
    }
    return (<Loader/>)

}

export default SingleArticle;