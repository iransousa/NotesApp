import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

import HomeScreen from '../pages/Home';
import NoteScreen from '../pages/Note';

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: 'Notas',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#252525',
          },
          headerTintColor: '#FFF',
        }}
      />
      <Screen
        name="Notes"
        component={NoteScreen}
        options={{
          headerShown: true,
          title: 'Notas',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#252525',
          },
          headerTintColor: '#FFF',
        }}
      />
    </Navigator>
  );
}
