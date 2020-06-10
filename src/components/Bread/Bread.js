import React from 'react';
import './Bread.css';

class Bread extends React.Component {
    state = {
        count: 0
    }

    // if we do not have a constructor...
    // React.Component automatically will set
    // this.props to the props that are passed in

    // this.props: read-only data coming in from parent
    // this.state: my local data that only this component
    // cares about

    clickHandler = () => {
        const count = this.state.count;
        this.setState({
            count: count+1
        })

        // go ahead and let our parent know that we made 
        // more bread...
        // props.breadCounter
        this.props.breadCounter();
    }
    render = () => {
        return (
        <div className='bread-component'>
            <h2>{this.props.breadType}</h2>
            <p>Current Quantity: {this.state.count}</p>
            <p>Baked By: {this.props.bakerName}</p>
            <button onClick={this.clickHandler}>Bake</button>
        </div>);
    }
}

export default Bread;