import React, { Component } from 'react';
import { auth } from './components/firebase';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import './App.css';
import './antd.css'

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {

    const that = this;

    auth.onAuthStateChanged(user => {
      if (user) {

        let user = auth.currentUser;
        that.setState({ uid: user.uid })
        console.log('user logged in: ' + user.uid)
      } else {
        that.setState({
          uid: null,
        })
        console.log('no user');
      }
    })

  }

  render() { 

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.state.uid ? (
            <Component {...props}
              uid={this.state.uid} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );

    // const AdminRoute = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       this.state.admin ? (
    //         <Component {...props}
    //           userId={this.state.userId} />
    //       ) : (
    //         <Redirect
    //           to={{
    //             pathname: "/login",
    //           }}
    //         />
    //       )
    //     }
    //   />
    // );

    return (
      <Router>
        <div>

          <Header admin={this.state.admin} name={this.state.name} />

          <Switch>

            <PrivateRoute exact path="/" component={Home} />

            <Route path="/login" 
              render={() => (
                !this.state.uid ? 
                  (<Route component={(props) => (<Login {...props} />)} />)
                  : 
                  (<Route component={(props) => (<Login {...props} uid={this.state.uid} />)} />)
              )} />

          </Switch>

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;

