import React, { Component } from 'react';
import UserForm from "./components/search";
import AllPeeps from "./components/home";

import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: null
  }

  // search btn click event
  getList = (e) => {
    e.preventDefault();
    const user = e.target.elements.usrid.value;
    //check if input is none
    if (user){
      axios.get(`https://607e868602a23c0017e8b79e.mockapi.io/api/v1/users/${user}`)
      .then(res => {
        this.setState({users:res.data});
        
        // console.log( 'Individual User Response Details');
        // console.log(res);
      })
      
      // console.log( 'User Id given:');
      // console.log( user);
    } else return;
  }
  render(){
    return (
    <div className="App">
      <header className="App-header">
        
        {/* search results here */}

        { this.state.users ? 
        <p>Id: { this.state.users.id } | 
        Name: { this.state.name } | 
        Phone Number: { this.state.users.phoneNumber } |
        Email: { this.state.users.email }</p> 
        :
        <p>Enter UserId To Query</p>
        }
        
        <UserForm getList={this.getList}></UserForm>
        <AllPeeps></AllPeeps>
      </header>
    </div>
    );
  }
}

export default App;
