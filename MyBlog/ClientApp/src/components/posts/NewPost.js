import React, { Component } from 'react';
import axios from 'axios';
export class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
           newPost:{
                title: '',
                description:'',
                authorId: '',
                imageDefault:''            
           },
           authors:[],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        axios.get("https://localhost:5001/api/authors")
            .then(response => {
                console.log(response)
                this.setState({ authors: response.data, isFetching: false })
            }).catch(error => console.log(error))
    }
    handleChange(event) {
        this.setState({newPost: {...this.state.newPost, [event.target.name]: event.target.value}});
    }
   
    handleSubmit(event){
        event.preventDefault();
        axios.post("https://localhost:5001/api/posts", this.state.newPost)
        .then(response => {
            console.log(response);
            console.log(this.state);
        }).catch(error => console.log(error))
    }
    render = () => {
       const options = this.state.authors.map(author => {
        return (
            <option key={author.id} value={author.id}>{author.firstName}</option>
        )
       })
        return (
            <div className='row'>
               <form onSubmit={this.handleSubmit}>
                     <div className='form-group'>
                        <label>Post Title</label>
                        <input
                         className='form-control' 
                         type="text" 
                         name="title"
                         value={this.state.newPost.title} 
                         onChange={this.handleChange}
                         />
                    </div>
                    <div className='form-group'>
                        <label>Post Description</label>
                        <textarea
                         className='form-control' 
                         name="description"
                         value={this.state.newPost.description} 
                         onChange={this.handleChange}
                         ></textarea>
                    </div>
                    <div className='form-group'>
                        <label>Author</label>
                       <select name="authorId" value={this.state.newPost.authorId} onChange={this.handleChange}>
                        {options}
                       </select>
                    </div>
                    <div className='form-group'>
                        <label>Image URL</label>
                        <input
                         className='form-control' 
                         type="url" 
                         name="imageDefault"
                         value={this.state.newPost.imageDefault} 
                         onChange={this.handleChange}
                         />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-primary' type="submit">Submit</button>
                    </div>
               </form>
            </div>
       )
    }
}
