import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Home extends Component {
    constructor(){
        super();
        this.state={

        }
    }

    pruebaClick(){
        console.log('me clickearon');
    }

    render(){
        return(
            <View style={styles.fondo}>
                <Text> Vista Home</Text>
                <TouchableOpacity style={styles.boton} onLongPress={()=>this.pruebaClick()}>
                    <Text> clickeame</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boton:{
        backgroundColor: '#ccc',
        padding: 20,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
    },
    fondo:{
        backgroundColor: 'rgba(0,255,0,0.8)'
    }

})

export default Home;