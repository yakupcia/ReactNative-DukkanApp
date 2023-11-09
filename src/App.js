import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import product from './pages/Product';
import detail from './pages/Detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="product"
          component={product}
          //options={{headerShown: false}}//bu üst titleyi kaldırır
          options={{
            headerStyle: {backgroundColor: '#388E3C'},
            title: 'Store',
            headerTitleStyle: {color: 'white'},
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={detail}
          options={{
            headerStyle: {backgroundColor: '#388E3C'},
            title: 'Detail',
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white', // ikinci sayfadaki geri dön tint'in rengini değiştirir.
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
