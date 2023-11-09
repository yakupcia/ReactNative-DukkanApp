import React from 'react';
import LottieView from 'lottie-react-native';

function Loading() {
  return (
    <LottieView
      source={require('../../asstes/error.json')}
      style={{flex: 1}} //animasyonun gözükmesi için gerekli
      autoPlay
    />
  );
}
export default Loading;
