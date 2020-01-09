import React, {Component } from 'react';
import axios from 'axios';



const testButtonClick = (e) => {
    axios.get('/v1/nos/account/getaccounts').then(resp => console.log('OK:',resp), error => console.log('Error', error))
  }

class TestButton extends Component{
    render(){
        return(
        <div className="testButton">
            <button onClick={() => testButtonClick()}>Test</button>
        </div>
        )
        
    }
}

export default TestButton