import React from "react";
import {View,Text} from "react-native"
import Form from './form'
import Cell from './cell'
import HorizontalFlatList from './flatList'
import TextFloating from "./textFloating";
export default class App extends React.Component{
  render(){
    return(
<View>
<Form/>
<Cell/>
<HorizontalFlatList/>
<TextFloating/>
</View>
    );
  }
}
