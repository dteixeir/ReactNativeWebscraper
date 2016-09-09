import {
  View,
  Text, 
  StyleSheet,
  TextInput
} from 'react-native';
var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <View>
        <Text style={styles.label}>{this.props.label}</Text>
        
        <TextInput style={styles.input} 
          value={this.props.value}
          onChangeText={(text) => this.props.callBack(text)}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    );
  }
});

// Now just have to define styles here!
var styles = StyleSheet.create({
  input: {
    padding: 4, 
    height: 40, 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18,
    alignSelf: 'center'
  }
});