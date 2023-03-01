import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

function Second(props){
    console.log(props);

    const user = props.route.params.username;

    function backToFirst(){
        props.navigation.goBack();
    }

    
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Second Page</Text>
            <Text style={styles.text}>{user}</Text>
            <Button title="Go Back" 
            onPress={backToFirst}
            />
        </SafeAreaView>
    );
}

export default Second;

const styles = StyleSheet.create({
    container: {flex:1, alignItems: 'center', justifyContent: 'center'},
    text: {fontSize:40, fontWeight: 'bold'}
});