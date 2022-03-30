import React, {Component} from "react";

class Card extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <article>
                <img src={this.props.dataPersonaje.image} alt={this.props.dataPersonaje.name} />
                <h3>{this.props.dataPersonaje.name}</h3>
                <p>Estado: {this.props.dataPersonaje.status}</p>
                <p>Borrar</p>
            </article>
        )

    }

}

export default Card;