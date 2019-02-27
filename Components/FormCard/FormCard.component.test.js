import React from 'react';
import renderer from 'react-test-renderer';
import FormCard from './FormCard.component';

describe('FormCard', () => {
  const mockFormCardData = {
      name: 'Personal Details',
      createdAt: new Date('2019-01-01T12:00:00'),
  };
  it('renders without crashing', () => {
    const formCard = renderer.create(<FormCard form={mockFormCardData}/>).toJSON();
    expect(formCard).toMatchSnapshot();
  });
});