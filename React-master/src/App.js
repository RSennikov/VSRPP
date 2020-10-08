import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';
import SignIn from './SignIn';


class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
    }

    render() {
        const { characters } = this.state;
        return (
            
            <div className="container">
                <Form handleSubmit={this.handleSubmit} />
                <br></br>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}


export default App;
