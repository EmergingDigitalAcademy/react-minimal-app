import React from 'react';
import Header from '../components/Header/Header.js';
import Bread from '../components/Bread/Bread.js';
import './App.css';

class App extends React.Component {
    state = {
        bakerName: 'blaine',
        totalBread: 0,
    }

    handleInput = (event) => {
        this.setState({
            bakerName: event.target.value
        })
    }

    increaseBread = () => {
        const loafs = this.state.totalBread;
        this.setState({
            totalBread: loafs+1
        })
    }
    clearBakerName = () => {
        this.setState({
            bakerName: 'blaine'
        })
    }

    render = () => {
        // react controlled component
        // just means that when the value changes, we
        // update the state (onChange)
        // and when the state changes, we set the value
        // to whatever the state is (value)
        return (
            <div className='content'>
                <Header title='Blaines Bake Shop' />
                <input value={this.state.bakerName} onChange={this.handleInput} />
                <button onClick={this.clearBakerName}>Clear</button>
                <p>Welcome {this.state.bakerName}!</p>
                <p>There are {this.state.totalBread} breads in stock today.</p>
                <Bread breadCounter={this.increaseBread} breadType='Sourdough Bread' bakerName={this.state.bakerName} />
                <Bread breadCounter={this.increaseBread} breadType='French Baguette' bakerName={this.state.bakerName} />
                <Bread breadCounter={this.increaseBread} breadType='Dark Rye Bread' bakerName={this.state.bakerName} />
                <Bread breadCounter={this.increaseBread} breadType='Banana Bread' bakerName={this.state.bakerName} />
                <br/>
                <br/>
                <footer>
                    © Bread 2020
                </footer>
            </div>
        )
    }

    // create instance state automatically without the constructor
    // this is the default state
    // state = {
    //     user: '',
    //     points: 0,
    //     location: 'fargo'
    // }

    // // function (blah) { ... } // `this` gets set to the function itself
    // // --> function gets a brand new scope, which overrides the class 'this'
    // // ARROW FUNCTIONS: do not make new scope
    // handleChange = (event) => {
    //     const value = event.target.value;
    //     this.setState({ 
    //         user: value
    //     });
    // }

    // handleLocation = (event) => {
    //     this.setState({location: event.target.value})
    // }

    // handleClick = (event) => {
    //     const currentPoints = this.state.points;
    //     this.setState({
    //         points: currentPoints + 1 
    //     })
    // }

    // // render is called by React
    // // render is automatically called if this class state ever changes
    // render = () => {
    //     // let surpriseClass = '';
    //     // if (this.state.user === 'blaine') {
    //     //     surpriseClass = 'green';
    //     // }
    //     return (
    //         <div className="Johnny-Appy-Seed">
    //             <h1 className={(this.state.user === 'blaine') ? 'green' : ''}>React Local State</h1>
    //             <input onChange={this.handleChange} placeholder='Name' />
    //             <input onChange={ (event) => this.setState({location: event.target.value}) } placeholder='Location' />
    //             <button onClick={this.handleClick}>Give Point</button>

    //             <br/>
    //             Your name is: {this.state.user} <br/>
    //             Your points are: {this.state.points} <br/>
    //             I live in: {this.state.location} <br/>
    //             <hr/>
    //         </div>
    //     );
    // }
}

export default App;