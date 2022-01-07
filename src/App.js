import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Postpage from './Components/Postpage';
import Postspage from './Components/Postspage';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/posts" component={Postspage} />
      <Route exact path="/posts/:id" component={Postpage} />
    </Router>
  )
}
