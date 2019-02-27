import React from 'react';
import renderer from 'react-test-renderer';
import FormCard from './FormCard.component';

describe('FormCard', () => {
  const mockFormCardData = {
      name: 'Personal Details',
      createdAt: "2019-01-01T06:30:00.000Z",
  };
  it('renders without crashing', () => {
    const formCard = renderer.create(<FormCard form={mockFormCardData}/>).toJSON();
    expect(formCard).toMatchSnapshot();
  });
});