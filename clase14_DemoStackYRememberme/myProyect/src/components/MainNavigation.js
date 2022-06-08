import React, {Component} from 'react';
import { db, auth } from '../firebase/config';

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


    login(mail, pass){
        //Debería loguear en Firebase y cambiar el estado loggedIn: true
        //Debe pasar como método a el componente login
        auth.signInWithEmailAndPassword(mail, pass)
            .then(response => console.log(response))
            .catch( error => console.log(error))

    }

    
    
    register(mail, pass, userName){
        //console.log(this.state)
        //Colocar el método de registración de Firebase
        auth.createUserWithEmailAndPassword(mail, pass)
            .then( responseRegister => {
                console.log(responseRegister); 
                //Guardar documento en colección de usuarios.
                db.collection('users').add({
                            email: mail,
                            userName: userName,
                            createdAt: Date.now(),
                        })
                        .then( responseUsers => console.log(responseUsers))
                        .catch(error => console.log(error))

                    })
            .catch( error => console.log(error))      
    }
    
    
    // register(){
    //     //Debería registrar en Firebase y cambiar el estado loggedIn: true
    //     //Debe pasar como método a el componente register
    // }

    logout(){
        //Debe pasar como método a el componente Porfile
        auth.signOut()
            .then()
            .catch( error => console.log(error))
    }


    render(){
        //Stack.Group funciona como React.Fragment y nos permite agrupar Screens.
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
                            initialParams = {
                                {   login: (mail, pass)=>this.login(mail, pass),
                                    logout:()=>this.logout()
                                }}
                        />
                        <Stack.Screen 
                            name='Registro'
                            component = { Register }
                            options = {{headerShown: false}}
                            initialParams = {{register: (mail, pass, userName)=>this.register(mail, pass, userName)}}
                        />
                    </Stack.Group>
                }
                </Stack.Navigator>
            </NavigationContainer>
        )
    }



}

export default MainNavigation