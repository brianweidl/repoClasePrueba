import React, {Component} from "react";
import './styles.css'

class Card extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        // console.log(this.props);
        return(
            <article className="tarjeta">
                <img src={this.props.dataPersonaje.image} alt={this.props.dataPersonaje.name} />
                <h3>{this.props.dataPersonaje.name}</h3>
                <p>Estado: {this.props.dataPersonaje.status}</p>
                <p onClick={ ()=>this.props.borrarPersonaje(this.props.dataPersonaje.id)}>Borrar</p>
            </article>
        )

    }

}

export default Card;