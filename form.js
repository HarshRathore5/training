import React from 'react';

import {
  View,
  Alert,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Table from "./table";
export default class Form extends React.Component {
  textForm = '';
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      street: '',
      city: '',
      state: '',
      country: '',
      pin: '',
      empRecord: [],
    };
  }

  handlePress() {
    let payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      jobTitle: this.state.jobTitle,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      pin: this.state.pin,
    };
    let empRecord = this.state.empRecord;
    console.log('empRecord', empRecord);
    empRecord.push(payload);
    this.setState(
      {
        empRecord: empRecord,
      },
      () => {
        console.log(this.state.empRecord);
      },
    );
  }

  onLogin() {
    Alert.alert('login', 'successful', [
      {
        text: 'OK',
      },
      {text: 'Cancel'},
    ]);
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.viewStyle}>
            <Text style={styles.textstyle}>First Sample</Text>
          </View>
          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>FIRST NAME</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({firstName: text})}
              placeholder="Enter first name here"></TextInput>
          </View>
          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>LAST NAME</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({lastName: text})}
              placeholder="Enter last name here"></TextInput>
          </View>
          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>E-MAIL</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({email: text})}
              placeholder="Enter e-mail here"></TextInput>
          </View>
           {/*
          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>JOB TITLE</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({jobTitle: text})}
              placeholder="Enter job title here"></TextInput>
          </View>
         
          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>STREET</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({street: text})}
              placeholder="Enter street here"></TextInput>
          </View>
          
          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>CITY</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({city: text})}
              placeholder="Enter city here"></TextInput>
          </View>
           <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>STATE</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({state: text})}
              placeholder="Enter state here"></TextInput>
          </View>
          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>COUNTRY</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({country: text})}
              placeholder="Enter country here"></TextInput>
          </View>
          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>PIN</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({pin: text})}
              placeholder="Enter PIN here"></TextInput>
          </View>

          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>PASSWORD</Text>
            <TextInput
              style={styles.textInputStyle}
              secureTextEntry={true}></TextInput>
          </View> */}
          <TouchableOpacity
            style={styles.touchableStyle}
            onPress={() => this.handlePress()}>
            <View style={styles.buttonStyle}>
              <Text style={styles.nameStyle}>Login</Text>
            </View>
          </TouchableOpacity>
          
        </ScrollView>
        <Table
            item={this.state.empRecord}
          />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#5ef2e8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textstyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  viewStyle2: {
    flexDirection: 'column',
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  viewStyle3: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textInputStyle: {
    borderWidth: 1,
    height: 40,
    borderColor: 'gray',
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 50,
    marginRight: 16,
    marginLeft: 16,
    backgroundColor: 'white',
    width: '90%',
  },

  nameStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 16,
    marginBottom: 8,
  },

  touchableStyle: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonStyle: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
