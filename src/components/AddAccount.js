import React, { Component } from 'react';



class AddAccount extends Component {

    state = {
        id: null,
        login: null
    }
render() {
    return(
        <div>
            <form>
                <label htmlFor="login">Login:</label>
                <input type="text" id="login" />
                <button>Submit</button>
            </form>
        </div>
    );
    }
}

export default AddAccount;