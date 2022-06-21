import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  padding: 20px;
`;

export const ButtonsBar = styled.View`
  width: 150px;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 30px;
`;

export const TextInput = styled.TextInput`
  font-size: 18px;
`;

export const TextNoteTittle = styled.TextInput`
  color: black;
  font-size: 20px;
  color: #808080;
  margin-bottom: 20px;
  border-bottom-width: 0.5px;
  padding: 10px;
  width: 100%;
`;
