import React, {useEffect} from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const Step1 = ({currentStep, updateCurrentStepTitle}) => {
  useEffect(() => {
    if(currentStep === 1) updateCurrentStepTitle('Vamos começar...')
  }, [currentStep])

  if(currentStep !== 1) return null;
  return <View style={styles.container}>
    <Text style={styles.inputText}>Informe seu nome completo</Text>
    <TextInput style={styles.input} autoFocus />
  </View>;
}

export default Step1;