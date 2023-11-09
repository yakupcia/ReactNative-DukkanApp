import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 2,
    padding: 2,
    marginVertical: 6,
  },
  ımage: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 3,
  },
  price: {
    textAlign: 'right',
    fontSize: 19,
  },
  body_container: {
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'snow',
  },
});
