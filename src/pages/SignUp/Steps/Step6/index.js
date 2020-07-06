import React, {useEffect} from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const Step6 = ({currentStep, updateCurrentStepTitle}) => {
  if(currentStep !== 6) return null;
  
  return <View style={styles.container}>
    <Text style={styles.inputText}>Insira uma senha segura</Text>
    <TextInput autoFocus style={styles.input} secureTextEntry textContentType="password" />
  </View>;
}

export default Step6;