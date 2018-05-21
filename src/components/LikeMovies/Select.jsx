import React from 'react';

const Select = (props) => {
  return (
    <div className="field">
      <div className="control">
        <div className="select is-medium">
          <select onChange={props.onSelectChange} value={props.favorites ? "favorite" : "all"} >
            <option value="all">All</option>
            <option value="favorite">Favorite</option>
          </select>
        </div>
      </div>
    </div>  
  )
}
export default Select;