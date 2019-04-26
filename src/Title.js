import React from 'react';
import './App.css';

class Title extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalNumber: this.props.names.length
        }
    }

    render() {
        return (
            <div>
                <p>Remaining names: ({this.props.names.length})</p>
                <p>Total names: ({this.state.totalNumber})</p>

            </div>
        );
    }
}

export default Title;
