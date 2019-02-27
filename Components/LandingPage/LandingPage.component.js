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
  SafeAreaView, Text, TouchableOpacity, Platform, ScrollView, View,
} from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './LandingPage.component.stylesheet';
import Icon from "react-native-vector-icons/Entypo";
import { GET_FORMS_URL_IOS, GET_FORMS_URL_ANDROID } from '../../config';
import FormCard from '../FormCard/FormCard.component';

export default class LandingPage extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  state = { forms: []};

  async componentDidMount() {
    try {
      const forms = await axios.get(Platform.OS === 'ios' ? GET_FORMS_URL_IOS : GET_FORMS_URL_ANDROID);
      this.setState({ forms: forms.data });
    } catch (errorObj) {
      console.log(errorObj);
    }
  }

  render() {
    const formCards = this.state.forms.map((form, index) => (<FormCard form={form} key={index} />));
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.header}>
            <Text style={styles.heading}> Awesome Forms </Text>   
            <Icon
              name="dots-three-vertical"
              color="white"
              size={40}
              style={styles.dotIcon}
            />
          </View>       
          <ScrollView contentContainerStyle={styles.screenContent}>
            {formCards}
          </ScrollView>
          <TouchableOpacity style={styles.createFormButton} testID="navToNewForm" onPress={() => navigation.navigate('NewForm')}>
              <Icon                            
                name="plus"
                size={30}      
                color="white"      
              />    
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
LandingPage.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};