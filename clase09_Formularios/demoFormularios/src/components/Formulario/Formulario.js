import React, {Component} from 'react';

class Formulario extends Component{
    constructor(props){
        super(props)
        this.state={
            value: '',
        }
    }

    evitarDefault(accionDefault){
        console.log('Evitando envío del formulario');
        accionDefault.preventDefault();
    }

    obtenerDatos(datos){
        this.setState({
            value: datos.target.value
        }, () => console.log(this.state.value))
        
    }

    render(){
        return(
            <form onSubmit={(event)=>this.evitarDefault(event)}>
                <input onChange={(cambios)=>this.obtenerDatos(cambios)} type="text" name="usuario" placeholder='ingrese usuario' value={this.state.value}/>
                <button type="submit"> Enviar</button>
            </form>
        )
    }

}

export default Formulario;