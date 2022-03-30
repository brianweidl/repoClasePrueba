import React, {Component} from 'react';
import Card from '../Card/Card';

class CharactersRyM extends Component {
    constructor(props){
        super(props)
        this.state={
            personajes:[],
            next:'' //actualizar la url de la siguiente página de resultados

        }
    }

    componentDidMount(){
        let url = 'https://rickandmortyapi.com/api/character'
        fetch(url)
            .then( response => response.json())
            .then( data => this.setState(
                {
                    personajes: data.results
                }
            ))
            .catch( error => error)
    }

    //Definir un método para pedir mas tarjetas.
    

    render(){
        console.log(this.state.personajes);
        return(
            <section>
                {
                    this.state.personajes.length === 0 ?
                    <p>Carganado...</p> :
                    this.state.personajes.map( (personaje, idx) => <Card key={personaje.name + idx} dataPersonaje={personaje}/>)
                }
            </section>
        )
    }
}

export default CharactersRyM