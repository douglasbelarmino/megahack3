import React, {useEffect} from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const Step5 = ({currentStep, updateCurrentStepTitle}) => {
  if(currentStep !== 5) return null;
  
  return <View style={styles.container}>
    <Text style={styles.inputText}>Informe seu email</Text>
    <TextInput autoFocus style={styles.input} keyboardType="email-address" textContentType="emailAddress" />
  </View>;
}

export default Step5;