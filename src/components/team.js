import React, { Component } from 'react';

const URL_TEAM = 'http://localhost:3004/teams'

class Team extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch(`${URL_TEAM}?name=${this.props.match.params.id}`, {method: 'GET'})
        .then(res => res.json())
        .then(json => {
            this.setState({data:json})
        });
    }

    renderRoster(squad) {
        return squad.map((player, index) => {
            return (
                <div key={index} className="item player-wrapper">
                   <img alt={player.name} src={`/images/avatar.png`}/>
                   <h4>{player.name}</h4>
                   <div className="node">
                        <span>Number:</span>{player.number}
                   </div>
                   <div className="node">
                        <span>PPG:</span>{player.PPG}
                   </div>
                   <div className="node">
                        <span>APG:</span>{player.APG}
                   </div>
                   <div className="node">
                        <span>RPG:</span>{player.RPG}
                   </div>
                </div>
            )
        })
    }

    renderData({data}){
        return data.map((item) => {
            return (
                <div key={item.id} className="team-data-wrapper">
                    <div className="left">
                        <img alt={item.name} src={`/images/teams/${item.logo}`}/>
                    </div>
                    <div className="right">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <hr />
                    </div>
                    <div className="squad">
                        {this.renderRoster(item.squad)}
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="team-data">
                {this.renderData(this.state)}
            </div>
        )
    }
}

export default Team;