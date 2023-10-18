
import './App.css';
import Homepage from '../src/pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SighinAndSignOut from './pages/sign-and-sign-up/sign-and-sign-up.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage} />
      <Route path ='/signin' component={SighinAndSignOut} />
      </Switch>
      
      
    </div>
  );
}

export default App;
