import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HomeScreen} from './presentation/screen/home/HomeScreen';

export const App = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};
