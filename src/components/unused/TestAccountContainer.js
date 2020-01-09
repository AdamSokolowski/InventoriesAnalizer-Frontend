import React, { Component } from 'react';
import AccountList from './model/AccountList';



class TestAccountContainer extends Component {

    state = {
        accounts : [
            {id: '1', login:'Socool'},
            {id: '2', login:'Nicola'},
            {id: '3', login:'Sasqacz'}
        ]
    }
render() {
    return(
        <div className="TestAccountContainer">
            <AccountList accounts={this.state.accounts}/>
        </div>
    );
    }
}

export default TestAccountContainer;