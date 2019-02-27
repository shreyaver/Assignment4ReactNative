const constants = {
  POST_FORM_URL_IOS: 'http://localhost:8080/form',
  POST_FORM_URL_ANDROID: 'http://10.0.2.2:8080/form',
  GET_FORMS_URL_IOS: 'http://localhost:8080/forms',
  GET_FORMS_URL_ANDROID: 'http://10.0.2.2:8080/forms',
  NAME_BLANK_ERROR_MESSAGE: 'Cannot have blank form name',
  NAME_NO_NUMBER_OR_ALPHABET_ERROR_MESSAGE: 'Cannot have form name without a number or alphabet',
  FIELDS_EMPTY_ARRAY_ERROR_MESSAGE: 'Cannot have form without any field',
  FIELDS_BLANK_ERROR_MESSAGE: 'Cannot have blank string as field',
  FIELDS_NO_NUMBER_OR_ALPHABET_ERROR_MESSAGE: 'Cannot have field name without a number or alphabet',
};
module.exports = constants;
