import React, { Fragment } from 'react'

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
    return (<div>
            <div className="sk-circle">
            <div className="sk-circle1 sk-child"></div>
            <div className="sk-circle2 sk-child"></div>
            <div className="sk-circle3 sk-child"></div>
            <div className="sk-circle4 sk-child"></div>
            <div className="sk-circle5 sk-child"></div>
            <div className="sk-circle6 sk-child"></div>
            <div className="sk-circle7 sk-child"></div>
            <div className="sk-circle8 sk-child"></div>
            <div className="sk-circle9 sk-child"></div>
            <div className="sk-circle10 sk-child"></div>
            <div className="sk-circle11 sk-child"></div>
            <div className="sk-circle12 sk-child"></div>
            <div className="loading-text">Loading</div>
            </div> 
        </div>
    )

}

export default SingleArticle;