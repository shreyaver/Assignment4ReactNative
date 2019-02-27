import forms from './forms.reducer';
import { addFormsActionCreator } from '../../actions';

describe('forms()', () => {
  const mockForms = [{
    id: 1,
    name: 'Personal Details',
    createdAt: '2019-01-01T06:30:00.000Z',
  }, {
    id: 2,
    name: 'Feedback',
    createdAt: '2019-01-01T06:30:00.000Z',
  }];
  it('adds forms to state', () => {
    expect(forms([], addFormsActionCreator(mockForms))).toEqual(mockForms);
  });
  it("adds forms to state only if form with id doesn't exist", () => {
    expect(forms(mockForms, addFormsActionCreator(mockForms))).toEqual(mockForms);
  });
});
