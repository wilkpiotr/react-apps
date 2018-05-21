import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => {
  return (<div className="table">
  <table className="table">
  <thead>
    <tr>
      <th>Title</th>
      <th>Type</th>
      <th>Rate</th>
      <th>Favorite</th>
    </tr>
  </thead>
  <tbody>
    {
      props.shownMovies.map((movie) => {
        const iconType = movie.favorite ? 'fas' : 'far';
        return (
          <tr key={movie.title}>
            <td>{movie.title}</td>
            <td>{movie.type}</td>
            <td>{movie.rate} / 10</td>
            <td><span className="icon like-movie"><i className={`${iconType} fa-lg fa-star`}></i></span></td>
          </tr> 
        );
      })
    }
  </tbody>
  </table>
  </div>)
}

Table.propTypes = {
  shownMovies: PropTypes.array.isRequired
}

export default Table;