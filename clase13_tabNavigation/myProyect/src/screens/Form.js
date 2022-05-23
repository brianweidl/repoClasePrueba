import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
        }
    }


    render(){
        return(
                <>
                <Text> Form</Text>
                   <Text
                    onPress={() => this.props.navigation.navigate('Register')}> Register </Text>
                </>
                
        )
    }

}


export default Form;