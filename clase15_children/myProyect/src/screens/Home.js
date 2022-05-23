import React, {Component} from 'react';
import { db, auth } from '../firebase/config';
import { View,
         Text,
         TouchableOpacity, 
         StyleSheet, 
         ActivityIndicator,
         FlatList, 
         Image } from 'react-native';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }
    
    componentDidMount(){
        db.collection('users').onSnapshot(
            docs => {
                let users = [];
                docs.forEach( oneDoc => {
                    users.push({
                        id: oneDoc.id,
                        data: oneDoc.data()
                    })
                })

                this.setState({
                    users: users
                })
            }
        )

        
    }


    render(){
        console.log(this.state);
        return(
                <View>
                    <Text>Home</Text>
                    
                </View>

        )
    }
}


export default Home;