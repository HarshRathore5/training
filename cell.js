import React from 'react'
import {View,Text,Image,StyleSheet,AppRegistry} from 'react-native'
export default class Cell extends React.Component{
    render(){
        return(
        <View style={styles.viewStyle}>
        <Image source={{uri: 'https://tse3.mm.bing.net/th?id=OIP.0KIQ-UTdpUIr8kUWz5kVYgHaE8&pid=Api'}}style={styles.imgStyle}/>
        <View>
            <Text style={styles.textStyle}>Devil of Diamonds</Text>
            <Text style={styles.textStyle2}>The Audible Rupture</Text>
        </View>
        <Text style={styles.textStyle2}>
            4:10
        </Text>
        </View>
        );
    }
}
const styles=StyleSheet.create({
    viewStyle:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingTop:50
    },
    imgStyle:{
        width:80,
        height:80,
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:15   
    },
    textStyle2:{
    color:'gray'
    }
});