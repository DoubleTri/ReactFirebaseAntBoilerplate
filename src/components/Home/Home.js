import React, { Component } from 'react';
import { auth } from '../firebase';
import '../../App.css';

class Home extends Component {

  signOut(e){
    auth.signOut();
    e.preventDefault();
  }    

  render() {
    return (
      <div className="home">
        <h3>This is the Home Page in the components/Home/Home.js file.</h3>
        <p onClick={this.signOut.bind(this)}>Log Out</p>
      </div>
    );
  }
}

export default Home;