import React, {Component} from 'react';

class Dice extends Component {
    rollD100 = () => {
        updateConsole(Math.floor(Math.random() * 100) +1);
    };
    rollD20 = () => {
        updateConsole(Math.floor(Math.random() * 20) +1);
    };
    rollD12 = () => {
        updateConsole(Math.floor(Math.random() * 12) +1);
    };
    rollD10 = () => {
        updateConsole(Math.floor(Math.random() * 10) +1);
    };
    rollD8 = () => {
        updateConsole(Math.floor(Math.random() * 8) +1);
    };
    rollD6 = () => {
        updateConsole(Math.floor(Math.random() * 6) +1);
    };
    rollD4 = () => {
        updateConsole(Math.floor(Math.random() * 4) +1);
    };
    rollD2 = () => {
        updateConsole(Math.floor(Math.random() * 2) +1);
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
function updateConsole(result){
    document.getElementById('lblOutput').innerHTML = 'You rolled a ' + result +'.';
};


export default Dice;