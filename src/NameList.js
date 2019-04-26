import React from "react";

class NameList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            nameList: this.props.namelist,
        }

    }

    removeName(selectedIndex) {
        console.log("item to be deleted: " + selectedIndex)
        var newNameList = this.state.nameList.filter((index) => {
            return index !== selectedIndex
        })
        this.setState({nameList: newNameList})
    }

    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.nameList.map(function(name, index){
                            return <li key={ index}> {name}
                            <a href='#' onClick={event=>this.removeName(name,event)}>[x]</a>
                            </li>
                        }.bind(this))
                    }
                </ul>
            </div>
        );
    }
}

export default NameList;
