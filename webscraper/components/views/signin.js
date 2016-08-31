import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage, TextInput } from 'react-native';

// My Classes
import Storage from '../../services/storage';
import Api from '../../api/animes';

// My Components
var Button = require('../common/button');
var Textbox = require('../common/textbox');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      //animes: [],
      user: {},
      username:'',
      password:'',
      errorMessage: ''
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>

        <Textbox
          label={'Username:'}
          value={this.state.username}
          callBack={(text) => this.setState({username: text})}
        />

        <Textbox 
          label={'Password:'}
          secureTextEntry={true}
          value={this.state.password}
          callBack={(text) => this.setState({password: text})}
        />

        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Sign In'} onPress={this.onPress} />
      </View>
    );
  },

  onPress: function() {
    this.auth();
    this.setState({
      password: ''
    });
  },

  auth: function() {
    Api.authenticate(this.state.username, this.state.password).then((data) => {
      Storage.save('token', data.token).then(() => {
        this.props.navigator.immediatelyResetRouteStack([{name:'animes'}]);
      })
      //Storage.modules.save('token', data.token);
    }, (error) => { 
      this.setState({ errorMessage: error.error });
    }); 
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});