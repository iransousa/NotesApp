import React, {useContext} from 'react';
import {TextInput} from 'react-native';
import {SearchArea} from './styles';
import NotesContext from '../../context/NotesContext';

export default function SearchBar({data, onChange}) {
  const {notes, setNotes} = useContext(NotesContext);
  const search = text => {
    if (text) {
      const newData = data.filter(item => {
        const itemTitle = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const titleSearch = text.toUpperCase();
        return itemTitle.indexOf(titleSearch) > -1;
      });
      onChange(newData);
    } else {
      onChange(notes);
    }
  };

  return (
    <SearchArea>
      <TextInput
        placeholder="Procure uma anotação..."
        placeholderTextColor={'#000'}
        maxLength={50}
        onChangeText={text => search(text)}
      />
    </SearchArea>
  );
}
