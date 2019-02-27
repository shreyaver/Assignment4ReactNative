import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#3F51B5',
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
  createFormButton: {
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    right: 40,
    alignItems: 'center',
    backgroundColor: '#3F51B5',
  },
  screenContent: {
    width: '100%',
    flexGrow: 1,
    paddingTop: 30,
    backgroundColor: '#D8E4F0',
    alignItems: 'center',
  },
  cardList: {
    width: '80%',
  },
});
