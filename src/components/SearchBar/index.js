import React, {useContext} from 'react';
import {View, TextInput} from 'react-native';
import Style from './style';
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
    <View style={Style.searchArea}>
      <TextInput
        placeholder="Procure uma anotação..."
        placeholderTextColor={'#000'}
        maxLength={50}
        onChangeText={text => search(text)}
      />
    </View>
  );
}
