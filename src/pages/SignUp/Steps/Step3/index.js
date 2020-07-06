import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import styles from "./styles";

const Step3 = ({ currentStep, updateCurrentStepTitle }) => {
  const [cpf, setCpf] = useState("");

  if (currentStep !== 3) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>Quando você nasceu?</Text>
      <TextInputMask
      autoFocus
        keyboardType="numeric"
        type={"custom"}
        options={{
          mask: "99/99/9999",
        }}
        style={styles.input}
        value={cpf}
        onChangeText={(text) => {
          setCpf(text);
        }}
      />
    </View>
  );
};

export default Step3;
