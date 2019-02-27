import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    height: 90,
    width: '100%',
    backgroundColor: '#3F51B5',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 22,
    marginLeft: 20,
  },
  dotIcon: {
    marginLeft: 'auto',
  },
  screenContent: {
    width: '100%',
    flexGrow: 1,
    paddingTop: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  containerView: {
    width: '85%',
  },
  input: {
    borderColor: 'grey',
    borderBottomWidth: 1,
    fontSize: 20,
    marginBottom: 20,
  },
  formNameInput: {
    borderColor: 'grey',
    borderBottomWidth: 1,
    fontSize: 20,
    marginBottom: 10,
  },
  addFieldButton: {
    marginTop: 10,
    width: 120,
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#3F51B5',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  fieldsView: {
    paddingVertical: 20,
  },
  saveButton: {
    width: '100%',
    height: 70,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
