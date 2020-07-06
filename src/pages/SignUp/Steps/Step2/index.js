import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import styles from "./styles";

const Step2 = ({ currentStep, updateCurrentStepTitle }) => {
  const [cpf, setCpf] = useState("");
  useEffect(() => {
    if (currentStep === 2)
      updateCurrentStepTitle("Só mais algumas informações:");
  }, [currentStep]);

  if (currentStep !== 2) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>Informe seu CPF</Text>
      <TextInputMask
        autoFocus
        keyboardType="numeric"
        type={"cpf"}
        style={styles.input}
        value={cpf}
        onChangeText={(text) => {
          setCpf(text);
        }}
      />
    </View>
  );
};

export default Step2;
