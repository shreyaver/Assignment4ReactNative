import { ADD_FORMS } from '../../actions';

const forms = (state = [], action) => {
  switch (action.type) {
    case ADD_FORMS:
      return [...state, ...action.payload.filter(form => (!state.some(existingform => existingform.id === form.id)))];
    default:
      return state;
  }
};
export default forms;
