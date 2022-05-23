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
                    <TouchableOpacity onPress={ ()=>this.props.route.params.login('ale@dh.com', '1234567890') }>
                        <Text>Loguame harcodeado</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ ()=>this.props.navigation.navigate('Registro') }>
                        <Text>No tengo cuenta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ ()=>this.props.route.params.logout() }>
                        <Text>Logout</Text>
                    </TouchableOpacity>
            
                </View>
        )
    }

}


export default Login;