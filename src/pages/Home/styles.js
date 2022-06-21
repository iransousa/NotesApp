import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-horizontal: 20px;
  padding-top: 20px;
  background-color: #252525;
`;

export const TextTittle = styled.Text`
  color: white;
  font-size: 20px;
  margin: 20px;
  text-align: center;
  font-weight: bold;
`;

export const TextEmpty = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
`;

export const NewNoteButton = styled.TouchableOpacity`
  z-index: 9;
  position: absolute;
  bottom: 30px;
  right: 40px;
  background-color: '#252525';
  border-radius: 100px;
  box-shadow: 10px 5px 5px black;
`;

export const NoteList = styled.FlatList`
  justify-content: space-between;
  margin: 5px;
`;
