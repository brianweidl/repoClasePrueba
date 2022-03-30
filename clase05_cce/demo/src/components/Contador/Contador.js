import React, {Component} from 'react';
import './styles.css';

class Contador extends Component{
    constructor(props){
        super(props);
        this.state ={
            numero:0,
            mensaje:'',
            color:'',
        }
    }
    incremetar(){
        this.setState({
            numero:this.state.numero +1
        }) //Recibe un objeto literal con el estado que quiero modificar
    }

    decrementar(){
        if(this.state.numero <= 0){
            this.setState({
                numero: this.state.numero -1,
                mensaje: "Ojo que estás en negativos",
                color:'rojo'
            })
        } else {
            this.setState({
                numero: this.state.numero -1
            })
        }
    }
    reset(){
        this.setState({
            numero: 0
        })
    }

    render(){
        return(
            <div className='contador'>
                <p>El número es: {this.state.numero}</p>
                <p className={this.state.color}>{this.state.mensaje}</p>
                <button onClick={()=>this.decrementar()}>Decrementar</button>
                <button onClick={()=>this.incremetar()}>Incrementar</button>
                <button onClick={()=>this.reset()}>Reset</button>
            </div>
        )
    }

}

export default Contador;