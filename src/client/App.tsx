import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './plugins/history';
import Home from './container/home';
import Post from './container/post';
import PostDesc from './container/postDesc';

const App: React.FC = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/post/:postId" component={PostDesc} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
