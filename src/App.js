import React, { useState } from 'react';
import './App.css';
import posts from './data/posts.json';
import LoginPagina from './data/pages/LoginPagina';
import HomePagina from './data/pages/HomePagina';
import BlogpostPagina from './data/pages/BlogpostPagina';
import BlogOverzicht from './data/pages/BlogOverzicht';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopMenu from "./TopMenu";
function App() {
  //   console.log(posts);
  // // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  // const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
  <Router>
      <TopMenu/>

    <Switch>
        <Route exact path="/">
        <HomePagina/>
        </Route>

        <Route path="/login-pagina">
          <LoginPagina/>
        </Route>

        <Route path="/blogposts">
          <BlogOverzicht/>
        </Route>

        <Route path="/blog/id">
        <BlogpostPagina/>
        </Route>

    </Switch>
  </Router>

  );
}

export default App;
