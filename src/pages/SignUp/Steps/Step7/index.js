import React, {useEffect} from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const Step7 = ({currentStep, updateCurrentStepTitle}) => {
  if(currentStep !== 7) return null;
  
  return <View style={styles.container}>
    <Text style={styles.inputText}>Qual a sua bebida favorita?</Text>
    <TextInput autoFocus style={styles.input} />
  </View>;
}

export default Step7;