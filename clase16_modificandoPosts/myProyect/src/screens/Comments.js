import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


class Comments extends Component{
    constructor(props){
        super(props)
        this.state={
            comments:[]
        }
    }

    componentDidMount(){
        this.setState({
            comments:[]
        })
    }

    render(){
        return(
                <Text> Comentarios</Text>
        )
    }

}


export default Comments;