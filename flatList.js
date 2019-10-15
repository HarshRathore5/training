import React from 'react'
import {View,Text,FlatList,StyleSheet,Image} from 'react-native'
export default class HorizontalFlatList extends React.Component{
    
    render(){
        return(
            <View style={styles.viewStyle}>
            <FlatList 
            horizontal
              data={[
                {key: 'a'},
                {key: 'b'},
                {key: 'c'},
                {key: 'd'},
                {key: 'e'},
                {key: 'f'},
                {key: 'g'},
                {key: 'h'},
                {key: 'i'},
                {key: 'j'},
                {key: 'k'},
                {key: 'l'},
              ]}
              renderItem={({item}) => <Image style={styles.imgStyle}source={{uri:'https://tse3.mm.bing.net/th?id=OIP.0KIQ-UTdpUIr8kUWz5kVYgHaE8&pid=Api' } }></Image>}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
 viewStyle:{
     justifyContent:'center',
     alignItems:'center',
     marginTop:50,
     height:100
 },
 imgStyle:{
     width:100,
     height:100,
     marginRight:10
 }
});