import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled(LinearGradient)`
  width: ${width}px;
  height: 100%;
  padding: 15px 20px;
`;

export const TitleContainer = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.Text`
  font-size: 32px;
  color: #fff;
  font-family: 'Roboto';
`;

export const ForgotPassword = styled.TouchableOpacity`
  align-items: flex-end;
  margin-right: 5px;
`;

export const ForgotPasswordText = styled.Text`
  color: #fff;
`;

export const ButtonsContainer = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const RegisterText = styled.Text`
  color: #fff;
  margin-top: 15px;
`;
