import React from 'react';



const AccountList = ({id, login}) =>{ 
    
        return(
            <div className="AccountList">
                <div>Id: { id }</div>
                <div>Login: { login }</div>
            </div>

        )
    }


export default AccountList
