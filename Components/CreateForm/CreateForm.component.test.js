import React from 'react';
import renderer from 'react-test-renderer';
import CreateForm from './CreateForm.component';


describe('CreateForm', () => {
  let navigation;
  beforeAll(() => {
    navigation = { navigate: jest.fn() };
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('renders without crashing', () => {
    const createForm = renderer.create(<CreateForm navigation={navigation} />).toJSON();
    expect(createForm).toMatchSnapshot();
  });
});