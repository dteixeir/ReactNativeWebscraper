/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Required Basics
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, AsyncStorage, TextInput, Navigator } from 'react-native';
var Signin = require('./components/views/signin');
var Animes = require('./components/views/animes');

var ROUTES = {
  signin: Signin,
  animes: Animes
}

var WebScraper = React.createClass ({

  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator}/>;
  },

  render: function() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={{ name: 'animes' }}
        renderScene={ this.renderScene }
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; }}
      />
    );
  }
});

// center styling broke this with no Error?
var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('webscraper', () => WebScraper);
