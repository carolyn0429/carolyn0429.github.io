import React from "react";

class SelectedName extends React.Component {
    constructor(props) {
        super(props)

    }

    render(){
        var selectedName = this.props.selectedName
        return (
            <div>
               <p>Lucky star: {selectedName} </p>
            </div>
        );
    }
}

export default SelectedName;
