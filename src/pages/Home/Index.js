import React, {useState, useContext} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchBar from '../../components/SearchBar';
import Colors from '../../styles/colors';
import Notes from '../../components/RenderNotes';
import NotesContext from '../../context/NotesContext';
import {Container, TextTittle, TextEmpty, NewNoteButton} from './styles';
export default function Home() {
  const navigation = useNavigation();
  const {notes, setNotes} = useContext(NotesContext);
  const {currentData, setCurrentData} = useContext(NotesContext);

  return (
    <Container>
      <TextTittle>Bem-Vindo</TextTittle>
      <SearchBar data={notes} onChange={setCurrentData} />
      <FlatList
        ListEmptyComponent={<TextEmpty>Sem anotações ainda</TextEmpty>}
        showsVerticalScrollIndicator={false}
        data={currentData}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between', margin: 5}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return <Notes item={item} navigation={navigation} />;
        }}
      />
      <NewNoteButton
        onPress={() => navigation.navigate('Notes', {id: '', search: false})}>
        <AntDesign name="pluscircleo" size={50} color={Colors.addButton} />
      </NewNoteButton>
    </Container>
  );
}
