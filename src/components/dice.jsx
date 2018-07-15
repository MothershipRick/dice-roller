import React, {Component} from 'react';

class Dice extends Component {
    constructor(props){
        super(props);

        this.state = {
            values: {},
            showValues: {}
        }
    }

    rollD100 = () => {
        console.log("test");
    };
    rollD20 = () => {
        console.log("test");
    };
    rollD12 = () => {
        console.log("test");
    };
    rollD10 = () => {
        console.log("test");
    };
    rollD8 = () => {
        console.log("test");
    };
    rollD6 = () => {
        console.log("test");
    };
    rollD4 = () => {
        console.log("test");
    };
    rollD2 = () => {
        console.log("test");
    };


    render() {
        return (
            <div className="diceContainer">
                <button onClick={this.rollD100} className="diceButton">Die 100</button>
                <button onClick={this.rollD20} className="diceButton">Die 20</button>
                <button onClick={this.rollD12} className="diceButton">Die 12</button>
                <button onClick={this.rollD10} className="diceButton">Die 10</button>
                <button onClick={this.rollD8} className="diceButton">Die 8</button>
                <button onClick={this.rollD6} className="diceButton">Die 6</button>
                <button onClick={this.rollD4} className="diceButton">Die 4</button>
                <button onClick={this.rollD2} className="diceButton">Die 2</button>
            </div>
        );
    }
}

export default Dice;