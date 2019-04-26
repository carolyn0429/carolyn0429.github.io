import React from 'react';
import './App.css';
import Title from "./Title";
import NameSelector from "./NameSelector";


class App extends React.Component {
    constructor(props) {
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
            names: [
                "Carolyn Hung",
                "Happy Lemon",
                "Dharma Jaana",
                "Dionísio Stacee",
                "Aristocles Kenanyahu",
                "Dex Loïc",
                "Chanelle Otokar"
            ]

        }
    }

    render() {
        return (
            <div>
                <Title names={this.state.names}/>
                <NameSelector names={this.state.names}/>
            </div>
        );
    }
}

export default App;
