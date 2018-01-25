import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import reducers from './reducers';

import Navigation from './components/navigation';
import PostsIndex from './components/posts-index';
import About from './components/about';
import PostsNew from './components/posts-new';
import PostsShow from './components/posts-show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id" component={PostsShow} />
            <Route path="/about" component={About} />
            <Route path="/" component={PostsIndex} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app'));
