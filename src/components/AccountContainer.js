import React, { Component } from 'react';
import AccountList from './model/AccountList';
import axios from 'axios';


class AccountContainer extends Component {

    state = {
        accounts : []
    }


    accountsRequest = () => {
        axios.get('/v1/nos/account/getaccounts').then(
            resp =>{
                console.log('OK:',resp)
                this.setState({accounts: resp.data})
            },
            error => console.log('Error', error))
      }


    componentDidMount(){
        this.accountsRequest();
    }      

    
    render() {
        return(
            <div className="AccountContainer">
                <AccountList accounts={this.state.accounts}/>
            </div>
        );
    }
}

export default AccountContainer;