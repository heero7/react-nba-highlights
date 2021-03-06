import React, { Component } from 'react';

// COMPONENTS
import FeaturedSlider from './featured';
import Subscriptions from './subs';
import Blocks from './blocks';
import Poll from './poll';

const URL_HOME = 'http://localhost:3004/home';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            home:''
        }
    }
    // Get when the component is rendered
    componentDidMount() {
        fetch(URL_HOME, {method: 'GET'})
        .then(res => res.json())
        .then(json => {this.setState({
            home:json
            })
        })
    }

    render() {
        return (
            <div>
                <FeaturedSlider slides={this.state.home.slider} />
                <Subscriptions />
                <Blocks blocks={this.state.home.blocks}/>
                <Poll />
            </div>
        )
    }
}

export default Home;