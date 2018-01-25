import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return (
      _.map(this.props.posts, post => {
        return (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <li className="list-group-item post-list-item" key={post.id}>
              {post.title}
            </li>
          </Link>
        );
      })
    );
  }

  render() {
    return (
      <div className="main">
        <h2>Posts</h2>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
