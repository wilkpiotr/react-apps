import React, { Component } from 'react';
import './MoreImages.css';
import Loader from '../Loader';
import Images from './Images';
import Button from './Button';
import axios from 'axios';

class MoreImages extends Component {

  state = { images: null,
    page: 1,
    loading: false}

  handleAddImages = () => {
    this.setState({loading: true})
    axios
    .get(`http://localhost:3000/images?_page=${this.state.page + 1}&_limit=4`)
    .then((result) => {
      const newImages = [...this.state.images, ...result.data];
      this.setState((state) => {
        return {images: newImages,
        page: this.state.page + 1,
        loading: false}
      })
    })
  }

  render() {

    if (!this.state.images) {
      return (<Loader/>)
    } else 
 
    return (<section className="section MoreImages project">
    <div className="container">
      <h1 className="title">More Images React App</h1>
      {/* First component mount should fetch data and show the loader */}
      <Images images={this.state.images}/>
      <Button onClick={this.handleAddImages} loading={this.state.loading}/>
    </div>
    </section>)

  }

  componentDidMount() {
    axios
    .get('http://localhost:3000/images?_page=1&_limit=4')
    .then((result) => {
      this.setState({
        images: result.data
      })
    })
  }

}

export default MoreImages;