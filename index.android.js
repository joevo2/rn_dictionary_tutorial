/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

// Load the Dictionary
var english_german = require('./english_german.json');

var Dictionary = React.createClass({
  getInitialState() {
    return {
      input: '',
      output: '',
    };
  },
  showMeaning() {
    // Use ternary operator to check if the word exists in the dictionary
    var meaning = this.state.input in english_german ? english_german[this.state.input] : "Not Found";

    // Update the state
    this.setState({
      output: meaning
    });
  },
  render() {
    return (
      <View style={styles.parent}>
        <Text style={styles.welcome}>
          Type something in English:
        </Text>
        <TextInput
          text={this.state.input}
          onChangeText={(e) => this.setState({input: e})}
          onSubmitEditing={this.showMeaning}
        />
        <Text style={styles.germanLabel}>
          Its German equivalent is:
        </Text>
        <Text style={styles.germanWord}>
          {this.state.output}
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  parent: {
    padding: 16
  },
  germanLabel: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  germanWord: {
    marginTop: 15,
    fontSize: 30,
    fontStyle: 'italic'
  },
});

AppRegistry.registerComponent('Dictionary', () => Dictionary);
