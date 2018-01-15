import React, { Component } from 'react';

class Subscriptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            error: false,
            success: false
        }
    }

    onChangeInput = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    saveSubscription(email) {
        const URL_EMAIL = 'http://localhost:3004/subscriptions';
        fetch(URL_EMAIL, {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        }).then(res => res.json())
        .then(() => {
            this.setState({
                email:'',
                success: true
            })
        });
    }

    clearMessages = () => {
        setTimeout(function(){
            this.setState({
                error: false,
                success: false
            })
        }.bind(this), 3000);
    }

    handleSubmit = (event) => {
       event.preventDefault();
       let email = this.state.email;
       let regex = /\S+@\S+\.\S+/;  // test email regex
       if (regex.test(email)) {
            this.saveSubscription(email);
       } else {
            this.setState({error: true});
       }
       this.clearMessages();
    }

    render() {
        return (
            <div className="subscribe-panel">
                <h3>Subscribe to Us!</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input name="" type="text" placeholder="Enter your email..." ref="" value={this.state.email} onChange={this.onChangeInput}/>
                        <div className={this.state.error ? "error show": "error"}>Invalid email!</div>
                        <div className={this.state.success ? "success show": "success"}>Thank you!</div>
                    </form>
                </div>
                <small>NBA freak? Join our newsletter, subscribe to get more information for this stuff blah blah blah basketball.</small>
            </div>
        )
    }
}

export default Subscriptions;