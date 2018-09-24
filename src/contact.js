import React from 'react';

//Class Component
// class Contact extends Component {
//   render() {
//   console.log(this.props);
//   //some detructuring
//   const { Pokemon } = this.props;
//   const PokemonList = Pokemon.map(pokemon => {
//     return(
//       <div className='Contact' key = {p okemon.id}>
//         <section>
//           <h1>Pokemon</h1>
//           <h3>Name: { pokemon.name }</h3>
//           <h4>Type: { pokemon.type }</h4>
//           <h4>rank: { pokemon.rank }</h4>
//         </section>
//       </div>
//     )
//   });
//   return(
//    <div className= 'pokemonList'>
//      {PokemonList}
//    </div>
//   );
//   }
// }


//In functional component props is not passed as a prameter
//so we have to pa ss it explicitly
const Contact = (props) => { // we can re write this statement with destructring
// const Contact = ({ Pokemon }) => { //instead of passing props
  const { Pokemon, deletePokemon } = props;
  const PokemonList = Pokemon.map( pokemon => {
    if (pokemon.rank <= 15) {
      return(
        <div className='Contact' key = {pokemon.id}>
          <section>
            <h1>Pokemon</h1>
            <h3>Name: { pokemon.name }</h3>
            <h4>Type: { pokemon.type }</h4>
            <h4>rank: { pokemon.rank }</h4>
          </section>
          <button onClick= {() => {deletePokemon(pokemon.id)}}>Delete</button>
        </div>
      )
    }else {
      return null;
    }
  });
  return (
    <div className='pokemonList'>
      {PokemonList}
    </div>
  )
}
export default Contact;
