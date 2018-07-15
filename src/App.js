import React, {Component} from 'react';
import logo from './d20.svg';
import './App.css';
import Dice from './components/dice.jsx';
import Console from './components/console.jsx';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-sidebar">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Crit Happens</h1>
                    <Dice/>
                </div>
                <div className="App-body">
                    <Console/>
                </div>
            </div>
        );
    }
}

export default App;
