import React, { Component } from 'react';
import axios from "axios";


class AddAccount extends Component {

    state = { login: '' };

    handleChange = (e) =>{
        this.setState({login: e.target.value})
    }

    handleSubmit = (e) =>{
        axios.post('/v1/nos/account/newaccount',{login: this.state.login}).then(resp => console.log('OK:',resp), error => console.log('Error', error));
        e.preventDefault();
    }

render() {
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="login">Login:</label>
                <input type="text" id="login" onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        </div>
    );
    }
}

export default AddAccount;