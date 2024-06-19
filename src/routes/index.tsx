import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useCity } from '@hooks/useCity';
import { Dashboard } from '@screens/Dashboard';
import { theme } from '@styles/theme';

import { AppRoutes } from './app.routes';

export function Routes() {
  const { city } = useCity();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: theme.colors.gray_900 }}>
      <NavigationContainer>
        {city ? <Dashboard /> : <AppRoutes />}
      </NavigationContainer>
    </View>
  );
}