import React from 'react';
import './App.css';
import DisplayNameList from "./DisplayNameList";
import SelectedName from "./SelectedName";

class NameSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false
        }
        this.selectedName = this.getRandomName(this.props.names)
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (<div>
            <p>Click button to select the volunteer randomly</p>
            <DisplayNameList names={this.props.names}/>
            <button onClick={this.handleClick}>Go</button>
                {this.state.isSelected ? <SelectedName selectedName={this.selectedName}/> : null}
        </div>
        );
    }

    handleClick() {
        this.setState(state => ({
            isSelected: true
        }));

        console.log(this.selectedName);
    }

    getRandomName(names) {
        let num = Math.floor(Math.random() * names.length)

        console.log('selected name is: ' + names[num])
        return names[num]
    }
}

export default NameSelector;
