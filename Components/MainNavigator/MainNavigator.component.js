import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CreateForm from '../CreateForm/CreateForm.component';
import LandingPage from '../LandingPage/LandingPage.component';

const MainNavigator = createStackNavigator({
  Home: {
    screen: LandingPage,
    navigationOptions: {
      header: null,
    },
  },
  NewForm: {
    screen: CreateForm,
    navigationOptions: {
      header: null,
    },
  },
},
{
  initialRouteName: 'Home',
});

export default createAppContainer(MainNavigator);
