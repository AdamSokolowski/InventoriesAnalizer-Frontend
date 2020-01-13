import React from 'react';
import AccountDiv from './AccountDiv';



const AccountDivsList = ({accounts}) =>{ 
    
    const accountsList = accounts.map(account => {
        return(
            <div className="account" key={account.id}>
                <AccountDiv id={account.id} login={account.login} />
            </div>

        )
    })
        return(
            <div className="AccountDivsList">
                {accountsList}
            </div>

        )
    }


export default AccountDivsList;
