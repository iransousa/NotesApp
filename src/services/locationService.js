import Geolocation from 'react-native-geolocation-service';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
  Linking,
} from 'react-native';

export const hasPermissionIOS = async () => {
  const openSetting = () => {
    Linking.openSettings().catch(() => {
      Alert.alert('Não foi possivel abrir as configurações');
    });
  };
  const status = await Geolocation.requestAuthorization('whenInUse');

  if (status === 'granted') {
    return true;
  }

  if (status === 'denied') {
    Alert.alert('Permissão de localização negada');
  }

  if (status === 'disabled') {
    Alert.alert('Habilite o serviço de localização', '', [
      {text: 'Vá em configurações', onPress: openSetting},
      {text: 'Não usar localização', onPress: () => {}},
    ]);
  }

  return false;
};
export const hasLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    const hasPermission = await hasPermissionIOS();
    return hasPermission;
  }

  if (Platform.OS === 'android' && Platform.Version < 23) {
    return true;
  }

  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (status === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }

  if (status === PermissionsAndroid.RESULTS.DENIED) {
    ToastAndroid.show(
      'Permissão de localização negada pelo usuário.',
      ToastAndroid.LONG,
    );
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    ToastAndroid.show(
      'Permissão de localização revogada pelo usuário.',
      ToastAndroid.LONG,
    );
  }

  return false;
};
