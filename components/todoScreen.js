import {StyleSheet, Text, View} from "react-native";
import * as React from "react";
import * as data from "./data.json"


const todos = data.todo

//HomeScreen komponenten tager en prop med og printer indholdet af denne i en <Text/>
function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>This is you current todo list</Text>

  
        {
            todos.map((todo,key)=>{
                return(
                    <Text style={styles.text} key={key}>
                        * {todo}
                    </Text>
                )
            })
        }



        </View>
    );
}

export default HomeScreen

//Lokal styling til brug i HomeScreen
const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height:'100%'
    },
    header:{
        fontSize: 24,
        color:"white",
    },
    text: {
        fontSize: 20,
        color:"white"
    },
});