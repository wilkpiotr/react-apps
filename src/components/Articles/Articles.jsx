import React, { Component } from 'react';
import './Articles.css';
import List from './List'
import SingleArticle from './SingleArticle';
import axios from 'axios'
import Loader from '../Loader'

class Articles extends Component {

  state = { list: null,
  article: null,
  id: 0,
  loading: false }

  handleSelectArticle = (id) => {
    this.setState((state) => {
      return {loading: true,
        id: id}
    });
    axios
    .get('http://localhost:3000/articles/' + id)
    .then((result) => {
      this.setState({
        article: result.data,
        loading: false
      });
    })
  }

  componentDidMount() {
    axios
    .get('http://localhost:3000/article_headings')
    .then((result) => {
      return result.data
    })
    .then ((list) => {
      this.setState({
        list: list
      })
    })
    axios
    .get('http://localhost:3000/articles/' + this.state.id)
    .then((result) => {
      this.setState({
        article: result.data
      });
    })
  }


  render() {
    
    if (!this.state.list) {
      return (<Loader/>)
    } 
    return (
      <section className="section Articles project">
        <div className="container">
          <h1 className="title">Articles React App</h1>
          {/* First component mount should fetch data and show the loader */}
          <div>
              <List articles={this.state.list} onSelectArticle={this.handleSelectArticle}/>  
          </div>
          {/* Clicking article on the list should show loader in the right side and fetch single article */}
          <div className="article">
            <SingleArticle article={this.state.article} id={this.state.id} loading={this.state.loading}/>
          </div>
        </div>
      </section>  
    )
  }
}

export default Articles;