import React from 'react'
import {View,
    Alert,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
export default class Form extends React.Component{
    
        onLogin(){
           Alert.alert("login","successful",[{
               text:'OK'},{text:'Cancel'}
           ])
        }
    
    render(){
        return(
            <SafeAreaView>
            <View style={styles.viewStyle}>
            <Text style={styles.textstyle}>First Sample</Text>
            </View>
            <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>NAME</Text>
            <TextInput style={styles.textInputStyle} 
            placeholder="Enter name here">   
            </TextInput>
            </View>
            <View style={styles.viewStyle3}>
            <Text style={styles.passwordStyle}>PASSWORD</Text>
            <TextInput style={styles.textInputStyle2} secureTextEntry={true}>
            
            </TextInput>
            </View>
            <TouchableOpacity style={styles.touchableStyle}
            onPress={()=> this.onLogin()}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.nameStyle}>Login</Text>
                </View>
                
            </TouchableOpacity>
                
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
viewStyle:{
    backgroundColor:'#5ef2e8',
    height: 60,
    justifyContent:'center',
    alignItems:'center'  
},
textstyle:{
 fontWeight:'bold',
 textAlign:'center',
 fontSize:15
},
viewStyle2:{
    flexDirection:'row',
    paddingTop:20,
    justifyContent:'space-evenly',
    alignItems:'center'
},
viewStyle3:{
    flexDirection:'row',
    paddingTop:20,
    justifyContent:'space-evenly',
    alignItems:'center'
},
textInputStyle:{
borderWidth:1,
height:40,
borderColor:'gray',
paddingLeft:20,
paddingRight:20,
borderRadius:50,
marginLeft:50,
backgroundColor:'lightgray',
width:200
},
textInputStyle2:{
    borderWidth:1,
    height:40,
    borderColor:'gray',
    paddingLeft:20,
    paddingRight:20,
    borderRadius:50,
    backgroundColor:'lightgray',
    width:200
},
nameStyle:{
    fontWeight:'bold',
    fontSize:18,
    paddingLeft:20
},
passwordStyle:{
    fontWeight:'bold',
    fontSize:18,
    paddingLeft:20
},
touchableStyle:{
 paddingTop:20,
 paddingLeft:20,
 paddingRight:20
},
buttonStyle:{
backgroundColor:'green',
alignItems:'center',
justifyContent:'center',
borderRadius:50,
paddingTop:15,
paddingBottom:15
}

});