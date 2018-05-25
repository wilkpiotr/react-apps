import React, { Fragment } from 'react';

const Images = (props) => {

    return(
        <Fragment>
            {props.images.map((image, index) => {
            return ( 
                <div key={index}>
                    <img src={image} alt="1"/>
                </div>
                )
            })}
        </Fragment>
    )
}

export default Images;