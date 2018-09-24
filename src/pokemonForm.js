import React, { Component } from 'react';

class NewPokemon extends Component {
state = {
 name: null,
 type: null,
 rank: null,
}
handleChange = (e) =>{
   this.setState({
   [e.target.name]: e.target.value,
 });
}
handleSumbit = (e) => {
  e.preventDefault();
  this.props.addPokemon(this.state);
}
  render() {
    return(
    <div className='NewPokemon'>
      <h1>Register your Pokemon!!</h1>
      <form onSubmit= {this.handleSumbit}>
        <label htmlFor= 'name'>Pokemon Name:-</label>
        <input type = 'text' name="name" placeholder ="Ex: Bulbasaur" onChange={this.handleChange}/>
        <label htmlFor= 'type'>Pokemon Type:-</label>
        <input type = 'text' name="type" placeholder ="Ex: Grass" onChange={this.handleChange}/>
        <label htmlFor= 'rank'>Pokemon Rank</label>
        <input type = 'text' name="rank" placeholder ="Ex: 23" onChange={this.handleChange}/>
        <button>Register</button>
      </form>
    </div>
    )
  }
}

export default NewPokemon;
