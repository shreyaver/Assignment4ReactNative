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
  SafeAreaView, Text, TouchableOpacity, TextInput, ScrollView, View, Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './CreateForm.component.stylesheet';
import Icon from 'react-native-vector-icons/Entypo';
import constants from '../../config';
import Axios from 'axios';

export default class CreateForm extends Component {
  static navigationOptions = {
    title: 'NewForm',
  };

  state = { 
    name: '',
    fields: [],
    status: '',
  };
  
  handleSubmit = async () => {
    const { name, fields } = this.state;
    if (name === '' || /^\s+$/.test(name)) {
      this.setState({ status: constants.NAME_BLANK_ERROR_MESSAGE });
      return;
    }
    if (!/[a-z]|[0-9]+/i.test(name)) {
      this.setState({ status: constants.NAME_NO_NUMBER_OR_ALPHABET_ERROR_MESSAGE });
      return;
    }
    if (fields.length === 0) {
      this.setState({ status: constants.FIELDS_EMPTY_ARRAY_ERROR_MESSAGE });
      return;
    }
    if (fields.some(field => field === '' || /^\s+$/.test(field))) {
      this.setState({ status: constants.FIELDS_BLANK_ERROR_MESSAGE });
      return;
    }
    if (fields.some(field => !/[a-z]|[0-9]+/i.test(field))) {
      this.setState({ status: constants.FIELDS_NO_NUMBER_OR_ALPHABET_ERROR_MESSAGE });
      return;
    }
    console.log('hello');
    const insertResult = await Axios.post(Platform.OS === 'ios' ? constants.POST_FORM_URL_IOS : constants.POST_FORM_URL_ANDROID, { name, fields });
    if (insertResult.data.message !== 'Created form') {
      this.setState({ status: 'Unable to create form' });
      return;
    } else {
      this.props.navigation.navigate('Home');
    }
  }
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
              style={styles.formNameInput}
              multiline
              maxLength={250}
              selectionColor="black"
              placeholder="Form Name"
              testID="formName"
              onChangeText={(newName) => { this.setState({ name: newName }); }}
            />
            <Text>
              {this.state.status}
            </Text>
            <TouchableOpacity style={styles.addFieldButton} testID="addFieldButton" onPress={() => {
              this.setState((state) => ({ fields: [...state.fields, ''] }));
              }}
            >
              <Text style={styles.buttonText}>
                ADD FIELD
              </Text>
            </TouchableOpacity>
            <View style={styles.fieldsView} testID="fieldsView">
              {this.state.fields.map((value, index) => (
                <TextInput
                  style={styles.input}
                  multiline
                  maxLength={250}
                  selectionColor="black"
                  key={index}
                  value={this.state.fields[index]}
                  onChangeText={(newField) => { 
                    this.setState((state) => ({ fields: [...state.fields.slice(0, index), newField, ...state.fields.slice(index + 1)] })); 
                  }}
                />))
              }
            </View>
          </View>
          <TouchableOpacity style={styles.saveButton} testID="submitButton" onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>
              SAVE
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
CreateForm.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};