import React, { Component } from 'react';

const URL_POLL_TEAMS = 'http://localhost:3004/teams';

class Poll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pollTeams:[]
        }
    }

    fetchPoll() {
        fetch(`${URL_POLL_TEAMS}?poll=true&_sort=count&_order=desc`, {method:'GET'})
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({
                pollTeams: json
            })
        });
    }

    componentDidMount() {
        this.fetchPoll();
    }

    addCount(count, id) {
        fetch(`${URL_POLL_TEAMS}/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({count: count + 1})
        })
        .then(() => {
            this.fetchPoll();
        })
    }

    renderPoll() {
        const positions = ['1ST', '2ND', '3RD'];
        return this.state.pollTeams.map((item, index) => {
            return (
                <div key={item.id} className="poll-item" onClick={() => this.addCount(item.count, item.id)}>
                    <img alt={item.name} src={`/images/teams/${item.logo}`}/>
                    <h4>{positions[index]}</h4>
                    <div>{item.count} Votes</div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="home-poll">
                <h3>Who will be crowned champion?</h3>
                <div className="poll-container">
                    {this.renderPoll()}
                </div>
            </div>
        )
    }
}

export default Poll;