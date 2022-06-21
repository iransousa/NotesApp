import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBar from '../../components/SearchBar';
import Style from './styles';
import Colors from '../../styles/colors';
import Notes from '../../components/RenderNotes';
import NotesContext from '../../context/NotesContext';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {notes, setNotes} = useContext(NotesContext);

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={Colors.loading} />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={Style.conteiner}>
        <Text style={Style.txtTitle}>Bem-Vindo</Text>
        <SearchBar data={notes} onChange={setNotes} />
        <FlatList
          ListEmptyComponent={
            <Text style={{textAlign: 'center', color: 'white'}}>
              Sem anotações ainda
            </Text>
          }
          showsVerticalScrollIndicator={false}
          data={notes}
          numColumns={2}
          columnWrapperStyle={Style.noteList}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return <Notes item={item} navigation={navigation} />;
          }}
        />
        <TouchableOpacity
          style={Style.newNoteButton}
          onPress={() => navigation.navigate('Notes', {search: false})}>
          <AntDesign name="pluscircleo" size={50} color={Colors.addButton} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
