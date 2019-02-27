import React from 'react';
import renderer from 'react-test-renderer';
import CreateForm from './CreateForm.component';

describe('CreateForm', () => {
  it('renders without crashing', () => {
    const createForm = renderer.create(<CreateForm />).toJSON();
    expect(createForm).toMatchSnapshot();
  });
});