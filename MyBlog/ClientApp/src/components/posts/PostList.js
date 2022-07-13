import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
export class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            posts: [],
        }
        // this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        axios.get("https://localhost:5001/api/posts")
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data, isFetching: false })
            }).catch(error => console.log(error))
    }
    removePost = (id, e) => {
        axios.delete("https://localhost:5001/api/posts/"+id)
            .then(response => {
               alert("Post deleted")
               this.setState({ posts: this.state.posts.filter(post => post.id !== id) })
            }).catch(error => console.log(error))
    }
    render = () => {
        const posts = this.state.posts.map(post => {
            return (
                <div className='card' key={post.id}>
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
                <div className='card-group'>
                    {
                        isFetching ? <p>Loading data...</p> : posts
                    }
                </div>
            </div>
       )
    }
}
