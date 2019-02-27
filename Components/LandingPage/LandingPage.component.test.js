import React from 'react';
import Axios from 'axios';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage.component';

describe('LandingPage', () => {
  let mockGetForms;
  const mockFormData = [
    {
      name: 'Personal Details',
      createdAt: new Date('2019-01-01T12:00:00'),
    }, {
      name: 'Code Academy Feedback 2019',
      createdAt: new Date('2019-01-01T12:00:00'),
    },
  ]
  beforeAll(() => {
    mockGetForms = jest.spyOn(Axios, 'get');
    mockGetForms.mockImplementation(() => Promise.resolve({ data: mockFormData }));
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('renders without crashing', () => {
    const landingPage = renderer.create(<LandingPage />).toJSON();
    expect(landingPage).toMatchSnapshot();
  });
  it('sets initial state to empty array for "forms"', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.instance().state).toEqual({ forms: [] });
  });

  it('sets state to fetched data after mounting', async () => {
    const wrapper = shallow(<LandingPage />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.instance().state).toEqual({ forms: mockFormData });
  });
  
});