import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { PostList } from './components/posts/PostList';
import './custom.css'
import { NewPost } from './components/posts/NewPost';
import Counter  from './components/Counter';
import {PostDetails} from './components/posts/PostDetails';
export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/posts' component={PostList} />
        <Route path='/new-post' component={NewPost} />
        <Route path='/post-detail/:id' component={PostDetails} />
      </Layout>
    );
  }
}
