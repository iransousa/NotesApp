import React from 'react';
import {NoteCard, Container, TextNoteTittle, TextNote} from './styles';
import {Dimensions} from 'react-native';

const width = (Dimensions.get('window').width - 60) / 2;
const height = (Dimensions.get('window').height - 400) / 2;

export default function renderNote({item, navigation}) {
  return (
    <NoteCard
      width={width}
      height={height}
      onPress={() => navigation.navigate('Notes', {id: item.id, search: true})}>
      <Container>
        <TextNoteTittle numberOfLines={2}>{item.title}</TextNoteTittle>
      </Container>
      <TextNote numberOfLines={6}>{item.note}</TextNote>
      <TextNote numberOfLines={3}>
        {item.latitude}
        {item.longitude}
      </TextNote>
    </NoteCard>
  );
}
