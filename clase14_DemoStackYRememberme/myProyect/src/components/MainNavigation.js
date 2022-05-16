import React, {Component} from 'react';

//Importar navegaciones
import {NavigationContainer} from '@react-navigation/native';
import  { createNativeStackNavigator} from '@react-navigation/native-stack';

// Guardar la ejecución de Stack
const Stack = createNativeStackNavigator();

//importar las screens o lo que necesite el menú
import Login from '../screens/Login';
import Register from '../screens/Register';
import Menu from './Menu'

class MainNavigation extends Component {

    constructor(props){
        super(props)
        this.state={
            loggedIn: true,
        }
    }
    
    componentDidMount(){
        //chequear que el usuario esté logueado.
        // Si el usuario está logueado, cambiar el estado loggedIn: true
    }


    login(){
        //Debería loguear en Firebase y cambiar el estado loggedIn: true
        //Debe pasar como método a el componente login
    }

    register(){
        //Debería registrar en Firebase y cambiar el estado loggedIn: true
        //Debe pasar como método a el componente register
    }

    logout(){
        //Debe pasar como método a el componente Porfile
    }


    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                {
                    this.state.loggedIn ?

                    <Stack.Screen 
                        name='Menu'
                        component ={ Menu }
                        options = {{headerShown: false}}
                    />
                    :
                    <Stack.Group>
                        <Stack.Screen 
                            name='Login'
                            component = { Login }
                            options = {{headerShown: false}}
                        />
                        <Stack.Screen 
                            name='Registro'
                            component = { Register }
                            options = {{headerShown: false}}
                        />
                    </Stack.Group>
                }
                </Stack.Navigator>
            </NavigationContainer>
        )
    }



}

export default MainNavigation