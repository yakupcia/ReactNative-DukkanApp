import {SafeAreaView, FlatList} from 'react-native';
import React from 'react';

//components
import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

//for Web API
import Config from 'react-native-config';
//custom hooks: stateler döndürmek için
import useFetch from '../../hooks/useFetch/useFetch';

function Product({navigation}) {
  const {loading, error, data} = useFetch(Config.API_URL);
  const HandeCardSelect = id => {
    navigation.navigate('SecondPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => HandeCardSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
}

export default Product;
