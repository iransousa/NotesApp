import React, {useState, useContext} from 'react';
import {SafeAreaView, FlatList, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchBar from '../../components/SearchBar';
import Style from './styles';
import Colors from '../../styles/colors';
import Notes from '../../components/RenderNotes';
import NotesContext from '../../context/NotesContext';

export default function Home() {
  const navigation = useNavigation();
  const {notes, setNotes} = useContext(NotesContext);
  const {currentData, setCurrentData} = useContext(NotesContext);

  return (
    <SafeAreaView style={Style.conteiner}>
      <Text style={Style.txtTitle}>Bem-Vindo</Text>
      <SearchBar data={notes} onChange={setCurrentData} />
      <FlatList
        ListEmptyComponent={
          <Text style={{textAlign: 'center', color: 'white'}}>
            Sem anotações ainda
          </Text>
        }
        showsVerticalScrollIndicator={false}
        data={currentData}
        numColumns={2}
        columnWrapperStyle={Style.noteList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return <Notes item={item} navigation={navigation} />;
        }}
      />
      <TouchableOpacity
        style={Style.newNoteButton}
        onPress={() => navigation.navigate('Notes', {id: '', search: false})}>
        <AntDesign name="pluscircleo" size={50} color={Colors.addButton} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
