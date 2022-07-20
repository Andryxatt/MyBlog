import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import {  } from 'react-router-dom';
export class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            errorMessage:"",
            posts: [],
        }
    }
    componentDidMount() {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYW5kcmlpMiIsImp0aSI6ImJiN2VkOTg5LWVkYzgtNGNmOC05YWU4LTM2YjY5NDQ3NDJiYSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJBZG1pbiIsIlVzZXIiXSwiZXhwIjoxNjU4MzUwNDc3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.bYmjYjlv9Z-9uwXXcfslo8S6trhndhK9S47jKv2FEUU"
            }
        }
        axios.get("https://localhost:44385/api/posts", config)
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data, isFetching: false })
            }).catch(error => { this.setState({errorMessage: error.response.statusText}) })
    }
    detailsPost(id, event){
        
    }
    removePost = (id, e) => {
        axios.delete("https://localhost:44385/api/posts/" + id)
            .then(response => {
               alert("Post deleted")
               this.setState({ posts: this.state.posts.filter(post => post.id !== id) })
            }).catch(error => console.log(error))
    }
    render = () => {
        const error = this.state.errorMessage;
        const posts = this.state.posts.map(post => {
            return (
                <div onClick={(e) => this.detailsPost(post.id, e)} className='card details' key={post.id}>
                    <img className='card-img-top' src={post.imageDefault} />
                    <div className="card-body">
                        <h2 className='card-title'>{post.title}</h2>
                        <p className="card-text">{post.description}</p>
                        <button className='btn btn-primary' onClick={(e) => this.removePost(post.id, e)}>Click</button>
                    </div>
                </div>
            );
        });
        const isFetching = this.state.isFetching;
        return (
            <div className='row'>
                 <NavLink tag={Link} className="text-dark btn btn-primary" to="/new-post">Add new Post</NavLink>
                <div className='card-columns'>
                    {
                        error.length > 0 ? <p>{error}</p> : isFetching ? <p>Loading data...</p> : posts
                    }
                </div>
            </div>
       )
    }
}
