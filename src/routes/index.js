import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StackRoutes} from './stack.routes';
import NotesContext from '../context/NotesContext';
import useLocalStorage from '../hooks/useLocalStorage';

export function Routes() {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [currentData, setCurrentData] = useState([]);
  return (
    <NotesContext.Provider
      value={{notes, setNotes, currentData, setCurrentData}}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </NotesContext.Provider>
  );
}
