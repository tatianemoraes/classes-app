import React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Form from './pages/Form';
import List from './pages/List';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ Home } path="/" exact/>
        <Route component={ Form } path="/form"/>
        <Route component={ List } path="/list"/>
      </Switch>
    </BrowserRouter>
  )
}