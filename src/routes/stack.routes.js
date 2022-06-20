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
        options={{headerShown: true}}
      />
      <Screen
        name="Note"
        component={NoteScreen}
        options={{headerShown: true}}
      />
    </Navigator>
  );
}
