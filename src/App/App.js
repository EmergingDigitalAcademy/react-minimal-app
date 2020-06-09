import React from 'react';
import './App.css';

class App extends React.Component {
    // create instance state automatically without the constructor
    // this is the default state
    state = {
        user: '',
        points: 0,
        location: 'fargo'
    }

    // function (blah) { ... } // `this` gets set to the function itself
    // --> function gets a brand new scope, which overrides the class 'this'
    // ARROW FUNCTIONS: do not make new scope
    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ 
            user: value
        });
    }

    handleLocation = (event) => {
        this.setState({location: event.target.value})
    }

    handleClick = (event) => {
        const currentPoints = this.state.points;
        this.setState({
            points: currentPoints + 1 
        })
    }

    // render is called by React
    // render is automatically called if this class state ever changes
    render = () => {
        // let surpriseClass = '';
        // if (this.state.user === 'blaine') {
        //     surpriseClass = 'green';
        // }
        return (
            <div className="Johnny-Appy-Seed">
                <h1 className={(this.state.user === 'blaine') ? 'green' : ''}>React Local State</h1>
                <input onChange={this.handleChange} placeholder='Name' />
                <input onChange={ (event) => this.setState({location: event.target.value}) } placeholder='Location' />
                <button onClick={this.handleClick}>Give Point</button>

                <br/>
                Your name is: {this.state.user} <br/>
                Your points are: {this.state.points} <br/>
                I live in: {this.state.location} <br/>
                <hr/>
            </div>
        );
    }
}

export default App;