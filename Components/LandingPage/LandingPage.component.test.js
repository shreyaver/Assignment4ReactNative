import React from 'react';
import Axios from 'axios';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage.component';

describe('LandingPage', () => {
  let mockGetForms;
  let navigation;
  const mockFormData = [
    {
      name: 'Personal Details',
      createdAt: "2019-01-01T12:00:00.000Z",
    }, {
      name: 'Code Academy Feedback 2019',
      createdAt: "2019-01-01T12:00:00.000Z",
    },
  ]
  beforeAll(() => {
    mockGetForms = jest.spyOn(Axios, 'get');
    mockGetForms.mockImplementation(() => Promise.resolve({ data: mockFormData }));
    navigation = { navigate: jest.fn() };
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('renders without crashing', () => {
    const landingPage = renderer.create(<LandingPage navigation={navigation} />).toJSON();
    expect(landingPage).toMatchSnapshot();
  });
  it('sets initial state to empty array for "forms"', () => {
    const wrapper = shallow(<LandingPage navigation={navigation} />);
    expect(wrapper.instance().state).toEqual({ forms: [] });
  });

  it('sets state to fetched data after mounting', async () => {
    const wrapper = shallow(<LandingPage navigation={navigation} />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.instance().state).toEqual({ forms: mockFormData });
  });

  it('directs to "NewForm" page on clicking button in header', () => {
    const wrapper = shallow(<LandingPage navigation={navigation} />);
    expect(navigation.navigate).not.toHaveBeenCalled();
    wrapper.find({ testID: 'navToNewForm' }).simulate('press');
    expect(navigation.navigate).toHaveBeenCalledWith('NewForm');
  });
});