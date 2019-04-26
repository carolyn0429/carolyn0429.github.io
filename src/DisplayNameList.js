import React from "react";
import NameList from "./NameList";

class DisplayNameList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameList: this.props.names,
            showNameList: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            showNameList: true
        })
    }
    render() {

        return (
            <div>
                <button onClick={this.handleClick}>Display Whole Names</button>
                {this.state.showNameList ? <NameList namelist={this.state.nameList}/> : null}
            </div>
        )
    }

}


export default DisplayNameList;
