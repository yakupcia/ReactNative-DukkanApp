import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Detail.styles';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Config from 'react-native-config';

function Detail({route}) {
  const {id} = route.params;
  console.log(id);

  const {loading, data, error} = useFetch(`${Config.API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  console.log(data);
  return (
    <View>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.bodu}>{data.description}</Text>
        <Text style={styles.prize}>${data.price}</Text>
      </View>
    </View>
  );
}

export default Detail;
