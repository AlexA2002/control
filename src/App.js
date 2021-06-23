import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import  Navbar  from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginV from './components/Login/loginV'
import Admin from './pages/Admin/Home'
import Becario from './pages/Becario/Home'
import PrivateRoute from '../src/components/auth-components/PrivateRoutes'
import PublicRoute from './components/auth-components/PublicRoutes';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={LoginV} />
        <Route path='/sign-up/enter-page' component={SignUp}/>
        <PrivateRoute path="/Admin" component={Admin}/>
        <PublicRoute path="/Becario" component={Becario}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
