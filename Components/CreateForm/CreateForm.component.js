/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  SafeAreaView, Text, TouchableOpacity, TextInput, ScrollView, View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './CreateForm.component.stylesheet';
import Icon from "react-native-vector-icons/Entypo";

export default class CreateForm extends Component {
  static navigationOptions = {
    title: 'NewForm',
  };

  state = { 
      name: '',
      fields: []};

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.header}>
            <Text style={styles.heading}> Create Form </Text>   
            <Icon
              name="dots-three-vertical"
              color="white"
              size={40}
              style={styles.dotIcon}
            />
          </View>       
          <ScrollView contentContainerStyle={styles.screenContent}>
            <View style={styles.containerView}>
                <TextInput
                    style={styles.input}
                    multiline
                    maxLength={255}
                    selectionColor="black"
                    placeholder="Form Name"
                    onChangeText={(newName) => { this.setState({ name: newName }); }}
                />
                <TouchableOpacity style={styles.addFieldButton}>
                <Text style={styles.buttonText}>
                    ADD FIELD
                </Text>
                </TouchableOpacity>
                
            </View>
          </ScrollView>
      </SafeAreaView>
    );
  }
}
CreateForm.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};