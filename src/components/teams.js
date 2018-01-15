import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

const URL_TEAMS = 'http://localhost:3004/teams';

const fadeAnimation = {
    transitionName: 'fade',
    transitionAppear: true,
    transitionAppearTimeout: 500,
    transitionEnter: true,
    transitionEnterTimeout: 500,
    transitionLeave: true,
    transitionLeaveTimeout: 500
}

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            filteredTeams: [],
            teamKeyWords: ''
        }
    }

    componentDidMount() {
        fetch(URL_TEAMS, {method: 'GET'})
        .then(res => res.json())
        .then(json => {
            this.setState({teams:json, filteredTeams:json})
        });
    }

    renderList({filteredTeams}) {
        return filteredTeams.map((item) => {
            return (
                <Link to={`/team/${item.name}`} key={item.id} className="team-item">
                    <img alt={item.name} src={`/images/teams/${item.logo}`} />
                </Link>
            )
        })
    }

    searchTeam(event) {
        const keyword = event.target.value;
        if (keyword !== '') {
            const list = this.state.teams.filter((item) => {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            });
            this.setState({filteredTeams: list, teamKeyWords: keyword})
        } else {
            this.setState({
                filteredTeams: this.state.teams,
                teamKeyWords: keyword
            })
        }
    }

    render() {
        return (
            <div className="teams-component">
                <div className="teams-input">
                    <input type="text"
                        placeholder="Search for a team.."
                        value={this.state.teamKeyWords}
                        onChange={e => this.searchTeam(e)}
                        />
                </div>
                <div className="teams-container">
                    <CSSTransitionGroup {...fadeAnimation}>
                        {this.renderList(this.state)}
                    </CSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default Teams;