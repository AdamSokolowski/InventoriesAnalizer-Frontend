import React from 'react';
import Account from './Account';
import { List } from '@material-ui/core';



const AccountList = ({accounts}) =>{ 
    
    const accountsList = accounts.map(account => {
        return(
                <Account id={account.id} login={account.login} />
        )
    })
        return(
            <List component="ul">
                {accountsList}
            </List>
        )
    }


export default AccountList;
