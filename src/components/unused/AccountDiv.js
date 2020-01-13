import React from 'react';



const AccountDiv = ({id, login}) =>{ 
    
        return(
            <div className="AccountDiv">
                <div>Id: { id }</div>
                <div>Login: { login }</div>
            </div>

        )
    }


export default AccountDiv;
