import React, { Component } from 'react';
import axios from 'axios';
import AccountDivsList from './AccountDivsList';



class AccountContainerBasic extends Component {

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
            <div className="AccountContainerBasic">
                <AccountDivsList accounts={this.state.accounts}/>
            </div>
        );
    }
}

export default AccountContainerBasic;