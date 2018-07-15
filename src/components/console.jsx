import React, {Component} from 'react';

class Console extends Component {
    constructor(props){
        super(props);

        this.state = {
            values: {},
            showValues: {}
        }
    }

    render() {
        return (
            <div className="consoleContainer">
                <textarea id="consoleOutput" defaultValue="Roll some dice!" />
            </div>
        );
    }
}
export default Console;