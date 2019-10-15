import React from 'react'
import { View,TextInput,Text,StyleSheet } from 'react-native';
export default class TextFloating extends React.Component{
    state={
        text:'Empty Input'
    }
    onKeyHandle(value){
                this.setState({
                    text:value
                })  
    }
    render(){

        return(
            <View>
                <Text>{this.state.text}</Text>
                <TextInput  name="username" onChangeText={this.onKeyHandle.bind(this)} style={styles.textInputStyle} placeholder="Enter Some Text" ></TextInput>
            </View>
        );
    }
}
const styles=StyleSheet.create({

    textInputStyle:{
        borderWidth:1,
        height:40,
        borderColor:'gray',
        paddingLeft:20,
        paddingRight:20,
        borderRadius:50,
        backgroundColor:'lightgray',
        width:200

}
});