import React, { Component } from 'react';

class Subscriptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        }
    }

    onChangeInput = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handleSubmit = (event) => {
       event.preventDefault();
       let email = this.state.email;
    }

    render() {
        return (
            <div className="subscribe-panel">
                <h3>Subscribe to Us!</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input name="" type="text" placeholder="Enter your email..." ref="" value={this.state.email} onChange={this.onChangeInput}/>
                    </form>
                </div>
                <small>NBA freak? Join our newsletter, subscribe to get more information for this stuff blah blah blah basketball.</small>
            </div>
        )
    }
}

export default Subscriptions;