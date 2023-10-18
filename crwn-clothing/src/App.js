import React from 'react';

import './App.css';
import Homepage from '../src/pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SighinAndSignOut from './pages/sign-and-sign-up/sign-and-sign-up.component';
import {auth} from './firebase/firebase.utils';
import { Component } from 'react';

class App extends Component{

  state= {
    currentUser: null
  }

  unsubsribeFromAuth = null;

  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user)
    })
  }
  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage} />
        <Route path ='/signin' component={SighinAndSignOut} />
        </Switch>
        
        
      </div>
    );
  }
  
}

export default App;
