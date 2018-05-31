import React from 'react';

const Button = (props) => {
    if (!props.loading)  {  
        return (<div onClick={props.onClick}>
            <a className="button is-large" disabled={props.disabled}>{props.value}</a>
        </div>)
    }
    return (<div >
        <a className="button is-loading is-large">Loading</a>
    </div>)
}

export default Button;