import {Dimensions, StyleSheet} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {margin: 10},
  title: {fontSize: 30, fontStyle: 'normal'},
  bodu: {fontSize: 18, marginTop: 10},
  prize: {textAlign: 'right', fontSize: 20, fontWeight: 'bold', marginTop: 10},
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
});
