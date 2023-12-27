import React from 'react';
import { SafeAreaView } from 'react-native';
import { HomeScreen } from './src/screens/home';


const App = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#282828' }}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
