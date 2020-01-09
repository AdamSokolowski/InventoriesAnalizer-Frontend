import React from 'react';
import Account from './Account';



const AccountList = ({accounts}) =>{ 
    
    const accountsList = accounts.map(account => {
        return(
            <div className="account" key={account.id}>
                <Account id={account.id} login={account.login} />
            </div>

        )
    })
        return(
            <div className="AccountList">
                {accountsList}
            </div>

        )
    }


export default AccountList
