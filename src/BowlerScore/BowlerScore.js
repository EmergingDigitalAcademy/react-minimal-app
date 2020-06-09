import React from 'react';
// import BowlerScore from '../BowlerScore/BowlerScore.js';
// import './App.css';

// Spread Operator for arrays ...
// Spread Operator for objects
class BowlerScore extends React.Component {
    state = {}

    render = () => {
        const numbers = [50, 100, 200];
        const newNumber = 10;

        // MUTATES the original array
        numbers.push(newNumber); // add to the array

        // How can we create a new array with our old and new numbers?
        const newList1 = [numbers[0], numbers[1], numbers[2], newNumber];
        const newList2 =  [...numbers, newNumber]; // spread!
        const newList3 = [...newList2];
        //                [[50, 100, 200], newNumber];
        //                [50, 100, 200, newNumber];
        // func(50, 100, 200)
        // func(...numbers)
        
        // const cat = numbers.concat(newNumber); // does not mutate
        // numbers[numbers.length] = newNumber;   // does mutate, like push

        // spread with objects
        const bowler = {
            name: 'blaine',
            lastBowlingScore: 100,
            isRightHanded: true,
        }

        // bowler.lastBowlingScore = 100; // mutating
        // const updatedBowler = {name: bowler.name, isRightHanded: bowler.isRightHanded, lastBowlingScore: 100};
        const updatedBowler = {...bowler, lastBowlingScore: 150};
        //                   1 {{name: 'blaine',lastBowlingScore: 100, isRightHanded:true}, lastBowlingScore: 150}
        //                   2 { name: 'blaine',lastBowlingScore: 100, isRightHanded:true,  lastBowlingScore: 150}
        //                   3 { name: 'blaine', isRightHanded:true, lastBowlingScore: 150 }
        return (
            <div>
                <h3>Bowler Score</h3>
                {newList3}
                {updatedBowler}
            </div>
        );
    }
}

export default BowlerScore;