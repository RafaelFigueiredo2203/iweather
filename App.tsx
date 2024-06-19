import '@libs/dayjs';

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { CityProvider } from '@contexts/CityContext';
import { Routes } from './src/routes';

export default function App() {

  return (
    <SafeAreaProvider style={{ flex: 1 }} >
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <CityProvider>
       <Routes /> 
      </CityProvider>
    </SafeAreaProvider>
  );
}
