import React, {Component} from 'react';
import Card from '../Card/Card';
import FilterField from '../FilterField/FilterField';
import './styles.css';

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
                    personajes: data.results,
                    next:data.info.next,
                }
            ))
            .catch( error => error)
    }

    //Definir un método para pedir mas tarjetas.
    pedirMas(){
        let url = this.state.next
        fetch(url)
            .then( response => response.json())
            .then( data => this.setState({
                personajes: this.state.personajes.concat(data.results), //Acumulos los resultados dentro del array
                next:data.info.next //Guardo en el estado la nueva url
            }))
            .catch( error => console.log('El error es: ' + error))
    } 

    //Borrar una tarjeta.
    borrar(id){
        let personajesFiltrados = [];
        personajesFiltrados = this.state.personajes.filter( unPersonaje => unPersonaje.id !== id );

        this.setState({
            personajes: personajesFiltrados
        })
    }

    filtarPersonajes(textoAFiltrar){
        let personajesFiltrados = [];
        personajesFiltrados = this.state.personajes.filter( unPersonaje => unPersonaje.name.toLowerCase().includes(textoAFiltrar.toLowerCase()))
        
        this.setState({
            personajes: personajesFiltrados
        })

    }
    
    render(){
        console.log(this.state.personajes);
        return(
            <React.Fragment>
                <FilterField filtrarPersonajes={(textoAFiltrar)=>this.filtarPersonajes(textoAFiltrar)}/>
                <button type="button" onClick={()=>this.pedirMas()}>Pedir más</button>
                <section className='card-wrapper'>
                    {
                        this.state.personajes.length === 0 ?
                        <p>Carganado...</p> :
                        this.state.personajes.map( (personaje, idx) => <Card key={personaje.name + idx} dataPersonaje={personaje} borrarPersonaje={ (id)=>this.borrar(id) } />)
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default CharactersRyM