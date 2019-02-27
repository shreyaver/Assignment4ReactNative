import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Axios from 'axios';
import CreateForm from './CreateForm.component';
import constants from '../../config';
import { TextInput } from 'react-native';


describe('CreateForm', () => {
  let navigation;
  beforeAll(() => {
    navigation = { navigate: jest.fn() };
    mockGetForms = jest.spyOn(Axios, 'post');
    mockGetForms.mockImplementation(() => Promise.resolve({ data: 'Created form' }));
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('renders without crashing', () => {
    const createForm = renderer.create(<CreateForm navigation={navigation} />).toJSON();
    expect(createForm).toMatchSnapshot();
  });
  it('changes "name" state to text when text is entered in "name" field', () => {
    const wrapper = shallow(<CreateForm navigation={navigation} />);
    expect(wrapper.instance().state.name).toEqual('');
    wrapper.find({ testID: 'formName' }).simulate('changeText', 'hello');
    expect(wrapper.instance().state.name).toEqual('hello');
  });
  it('adds new form field on clicking "add field" button', () => {
    const wrapper = shallow(<CreateForm navigation={navigation} />);
    expect(wrapper.instance().state.fields).toEqual([]);
    wrapper.find({ testID: 'addFieldButton' }).simulate('press');
    expect(wrapper.instance().state.fields).toEqual(['']);
  });
  it('changes "fields" state when text is entered in "form field name"', () => {
    const wrapper = shallow(<CreateForm navigation={navigation} />);
    wrapper.find({ testID: 'addFieldButton' }).simulate('press');
    wrapper.find({ testID: 'fieldsView' }).find(TextInput).simulate('changeText', 'hello');
    expect(wrapper.instance().state.fields).toEqual(['hello']);
  });
  it('should give error on inserting string with only blank spaces in "name"', () => {
    const formObj = {
      name: ' ',
      fields: ['First Name', 'Last Name', 'Address', 'Country'],
    };
    const wrapper = shallow(<CreateForm navigation={navigation} />);
    wrapper.instance().setState(formObj);
    wrapper.find({ testID: 'submitButton' }).simulate('press');
    expect(wrapper.instance().state.status).toEqual(constants.NAME_BLANK_ERROR_MESSAGE);
  });
  it('should give error on inserting string without any alphabet or number in "name"', () => {
    const formObj = {
      name: '.',
      fields: ['First Name', 'Last Name', 'Address', 'Country'],
    };
    const wrapper = shallow(<CreateForm navigation={navigation} />);
    wrapper.instance().setState(formObj);
    wrapper.find({ testID: 'submitButton' }).simulate('press');
    expect(wrapper.instance().state.status).toEqual(constants.NAME_NO_NUMBER_OR_ALPHABET_ERROR_MESSAGE);
  });
  it('should give error on inserting empty array in "fields"', () => {
    const formObj = {
      name: 'Personal Details',
      fields: [],
    };
    const wrapper = shallow(<CreateForm navigation={navigation} />);
    wrapper.instance().setState(formObj);
    wrapper.find({ testID: 'submitButton' }).simulate('press');
    expect(wrapper.instance().state.status).toEqual(constants.FIELDS_EMPTY_ARRAY_ERROR_MESSAGE);
  });
  it('should give error on inserting string with only blank spaces as a field', () => {
    const formObj = {
      name: 'Personal Details',
      fields: [' ', 'Last Name', 'Address', 'Country'],
    };
    const wrapper = shallow(<CreateForm navigation={navigation} />);
    wrapper.instance().setState(formObj);
    wrapper.find({ testID: 'submitButton' }).simulate('press');
    expect(wrapper.instance().state.status).toEqual(constants.FIELDS_BLANK_ERROR_MESSAGE);
  });
  it('should give error on inserting string without any alphabet or number as a field', () => {
    const formObj = {
      name: 'Personal Details',
      fields: ['.', 'Last Name', 'Address', 'Country'],
    };
    const wrapper = shallow(<CreateForm navigation={navigation} />);
    wrapper.instance().setState(formObj);
    wrapper.find({ testID: 'submitButton' }).simulate('press');
    expect(wrapper.instance().state.status).toEqual(constants.FIELDS_NO_NUMBER_OR_ALPHABET_ERROR_MESSAGE);
  });
});
