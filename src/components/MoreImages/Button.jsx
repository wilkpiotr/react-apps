import React from 'react';

const Button = ( {onClick, loading} ) => {

    if (!loading)  {  
        return (<div onClick={onClick}>
            <a className="button is-large">Next Images</a>
        </div>)
    }

    return (<div onClick={onClick}>
        <a className="button is-loading is-large">Loading</a>
    </div>)
}

export default Button;