import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

function First(props){
     console.log(props);


    function NavigateToPage(){
        props.navigation.navigate('SecondScreen', {username: 'melikekizilcik'});
    }



    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>First Page</Text>
            <Button title="Go to Second" onPress={NavigateToPage}/>
        </SafeAreaView>
    );
}

export default First;


const styles = StyleSheet.create({
    container: {flex:1, alignItems: 'center', justifyContent: 'center'},
    text: {fontSize:40, fontWeight: 'bold'}
});