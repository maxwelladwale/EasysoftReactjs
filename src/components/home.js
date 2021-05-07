import React, { Component } from 'react';
import axios from 'axios';

class AllPeeps extends Component {
    state = {
        users: []
    }
    
    componentDidMount(){
        axios.get(`https://607e868602a23c0017e8b79e.mockapi.io/api/v1/users`)
        .then(response => {
            this.setState({ users: response.data})
            
            // console.log("This are users");
            // console.log(response);
        })
    }
    
    render(){
        return (
            <div>
                <p>list of users</p>
                    <table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>PhoneNumber</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map(user => (
                            <tr key={user.id}>
                                <td >{user.id}</td> 
                                <td>{user.name}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                );
            }
        }

export default AllPeeps;
