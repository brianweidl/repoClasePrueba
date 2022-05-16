import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
        }
    }


    render(){
        //Falta implementar for de login y el método que viene de mainNavigation 
        return(
                <View>
                    <Text> Login</Text>
                    <TouchableOpacity onPress={ ()=>this.props.navigation.navigate('Registro') }>
                        <Text>No tengo cuenta</Text>
                    </TouchableOpacity>
            
                </View>
        )
    }

}


export default Login;