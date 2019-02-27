import { combineReducers } from 'redux';
import forms from './forms.reducer';

const formApp = combineReducers({
  forms,
});

export default formApp;
