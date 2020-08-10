import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import AppStack from './src/routes/AppStack';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AppStack />
    </>
  );
};

export default App;
