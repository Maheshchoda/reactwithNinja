import React, { Component } from 'react';
import Contact from './contact';
import './styles.css';
import NewPokemon from './pokemonForm';

class App extends Component {
  state = {
     pokemon : [
       {name: 'Bulbasaur', type: 'Grass', rank: 2, id: 1},
       {name: 'Pikachu', type: 'Electric', rank: 1, id: 2},
       {name: 'Charizard', type: 'Fire', rank: 5, id: 3},
       {name: 'Onix', type: 'Rock', rank: 8, id: 4},
     ]
  }
addPokemon = (poke) => {
poke.id = Math.random();
let pokemon = [...this.state.pokemon, poke];
 this.setState({
  pokemon: pokemon
})
}
deletePokemon = (id) => {
 let pokemon = this.state.pokemon.filter(pokemon => {
 return pokemon.id !== id;
})
 this.setState({
 pokemon: pokemon
})
}

componentDidMount(){
console.log(`Component Mounted`);
}
componentDidUpdate(prevProps, prevState){
console.log(`Component Updated`);
console.log(prevProps, prevState);
}
 render() {
    return (
      <div className="App">
        <h1>This is my first react App</h1>
        <p>Welcome :)</p>
        <Contact  Pokemon = { this.state.pokemon } deletePokemon = {this.deletePokemon}/>
        <NewPokemon pokemon = {this.state.pokemon} addPokemon = {this.addPokemon}/>
      </div>
    );
  }
}

export default App;
