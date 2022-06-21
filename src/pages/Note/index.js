import React, {useState, useEffect, useLayoutEffect, useContext} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Style from './styles';
//import Save from '../../components/saveNote';
//import Delete from '../../components/delNote';
import NotesContext from '../../context/NotesContext';
import uuid from 'react-native-uuid';
import {hasLocationPermission} from '../../services/locationService';
import Geolocation from 'react-native-geolocation-service';
import {Routes} from '../../routes';

export default function Notes({route, navigation}) {
  const {notes, setNotes} = useContext(NotesContext);
  const [note, setNote] = useState({
    id: uuid.v4(),
    title: '',
    note: '',
    date: new Date(),
    notificationId: null,
    location: 0,
  });

  useEffect(() => {
    if (route.params.id) {
      const {id} = route.params;
      const noteToEdit = notes.find(not => not.id === id);
      setNote(noteToEdit);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View
            style={{
              width: 150,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginRight: 30,
            }}>
            <TouchableOpacity onPress={() => handleSaveNote()}>
              <Feather name="save" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRemoveNote()}>
              <Feather name="trash-2" size={24} color="white" />
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, [navigation, note]);

  const handleSaveNote = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }
    await Geolocation.getCurrentPosition(
      position => {
        setNote({...note, location: position});
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );

    if (route.params.id) {
      const filteredBooks = notes.filter(not => not.id !== route.params.id);
      setNotes([note, ...filteredBooks]);
    } else {
      setNotes([note, ...notes]);
    }

    navigation.goBack();
  };

  const handleRemoveNote = () => {
    setNotes(notes.filter(not => not.id !== route.params.id));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={Style.conteiner}>
      <TextInput
        style={Style.txtTitleNote}
        autoFocus={true}
        maxLength={40}
        value={note.title}
        placeholder={'Titulo'}
        onChangeText={text => setNote({...note, title: text})}
      />
      <ScrollView>
        <TextInput
          style={Style.txtInput}
          multiline={true}
          value={note.note}
          placeholder={'Anotação'}
          onChangeText={text => setNote({...note, note: text})}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
