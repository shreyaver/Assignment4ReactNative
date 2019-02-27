import React, {Component} from 'react';
import {
  Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './FormCard.component.stylesheet';
import convertAndFormatDateToLocalTime from '../../helpers/convertAndFormatDateToLocalTime/convertAndFormatDateToLocalTime';

export default class FormCard extends Component {
  render() {
    const { form } = this.props;
    return (
        <View style={styles.card}>
          <View style={styles.formNameContainer}>
            <Text style={styles.formName} numberOfLines={3}>
              {form.name}
            </Text>
          </View>
          <View style={styles.formCreatedContainer}>
            <Text style={styles.createdAt}>
              Created on:
              {' '}
              {convertAndFormatDateToLocalTime(form.createdAt)}
            </Text>
          </View>
        </View>);
  } 
}
FormCard.propTypes = {
  form: PropTypes.shape({
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};