import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StackRoutes} from './stack.routes';
import NotesContext from '../context/NotesContext';
import useLocalStorage from '../hooks/useLocalStorage';

export function Routes() {
  const [notes, setNotes] = useLocalStorage('notes', []);
  return (
    <NotesContext.Provider value={{notes, setNotes}}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </NotesContext.Provider>
  );
}
