import styled from 'styled-components';

export const NoteCard = styled.TouchableOpacity`
  background-color: #fff;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 10px 5px 5px black;
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextNote = styled.Text`
  color: black;
`;

export const TextNoteTittle = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;
