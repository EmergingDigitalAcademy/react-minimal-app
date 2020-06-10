import React, { Component } from 'react';
import "./Specials.css";

class Specials extends Component {
    state = {
        specialsList: ['Rye Bread', 'Sourdough', 'Sourdough', 'All Cheese 10% off'],
        bakersName: 'blaine',
        groceryList: [
            { item: 'bread flour', count: 2 },
            { item: 'chocolate chips', count: 5 },
            { item: 'bananas', count: 10 }
        ],
        newItem: '',
        newCount: '',
    }

    addSpecial = () => {
        // spread operator here helps us add to the list without
        // using .push on the actual this.state object list
        this.setState({
            specialsList: [...this.state.specialsList, 'soup']
        })
    }
    render = () => {
        const specialsList = this.state.specialsList;
        // const { specialsList, bakersName } = this.state;
        let listItemsHtml = [];
        let key = 0;
        for (let special of specialsList) {
            listItemsHtml.push(<li key={special + '-' + key}> {special}</ li>);
            key++;
        }
        // const listItemsHtml = specialsList.map(special => <li>{special}</li>);

        // array.map: loops through the whole array
        // and calls the function for every item,
        // then returns each item back into an array
        /*
        [1, 2, 3].map((item) => {
            return <li>{item}</li>
        })

        [
            1, ----> func ----> <li>1</li>
            2, ----> func ----> <li>2</li>
            3, ----> func ----> <li>3</li>
        ]
        */

        // use map when you just want to transform data in an array
        // into another array that has similar properties
        // const listItemsHtml = specialsList.map(item => <li>{item}</li>);
        let groceryItems = [];
        for (let groceryItem of this.state.groceryList) {
            groceryItems.push(<li>Please get {groceryItem.count} of {groceryItem.item}</ li>);
        }
        return (
            <div className='specials'>
                Splatting looks like this:
                <p>Specials:</p>
                <ul>
                    {listItemsHtml}
                </ul>

                <p>Grocery List</p>
                <ul>
                    {groceryItems}
                </ul>

                <input value={this.state.newItem} onChange={(event) => this.handleGroceryChange(event, 'name')} placeholder='item name' />
                <input value={this.state.newCount} onChange={(event) => this.handleGroceryChange(event, 'count')} placeholder='item count' />
                <button onClick={this.createGrocery}>Create</button>
            </div>
        )
    }

    createGrocery = () => {
        const newItem = {
            item: this.state.newItem,
            count: this.state.newCount,
        }

        // push to the grocery list AND reset our temporary values in state
        // the inputs on the form will also reset themselves.
        this.setState({
            groceryList: [...this.state.groceryList, newItem],
            newItem: '', // reset newItem (inputs will reset)
            newCount: 0, // reset newCount (inputs will reset too)
        })
    }

    handleGroceryChange = (event, property) => {
        // property will be either 'name', or 'count'
        if (property === 'name') {
            // update the state for name
            this.setState({
                newItem: event.target.value
            })
        } else if (property === 'count') {
            // update the state for count
            this.setState({
                newCount: event.target.value
            })
        }
    }
}

export default Specials;