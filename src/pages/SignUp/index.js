import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from '../../contexts/auth';


import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";

import styles from "./styles";

import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import Step7 from "./Steps/Step7";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepTitle, setStepTitle] = useState("Vamos começar...");
  
  const navigation = useNavigation();
  const { signUp } = useAuth()


  function handleNavigateBack() {
    navigation.goBack();
  }

  const handleNext = async (event) => {
    let cs = currentStep;
    if(cs >= 6){
      cs = 7;
      signUp();
    }
    else{
      cs = currentStep + 1;
    }

    setCurrentStep(cs);
  };

  const handlePrev = () => {
    let cs = currentStep;
    if(cs <= 1){
      cs = 1
      handleNavigateBack();
    }
    else{
      cs = currentStep - 1;
    }
    setCurrentStep(cs);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrev}>
          <Icon name="arrow-left" size={22} color="#00448C" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{stepTitle}</Text>
      </View>
      <View style={styles.body}>
        <Step1 currentStep={currentStep} updateCurrentStepTitle={setStepTitle} />
        <Step2 currentStep={currentStep} updateCurrentStepTitle={setStepTitle} />
        <Step3 currentStep={currentStep} updateCurrentStepTitle={setStepTitle} />
        <Step4 currentStep={currentStep} updateCurrentStepTitle={setStepTitle} />
        <Step5 currentStep={currentStep} updateCurrentStepTitle={setStepTitle} />
        <Step6 currentStep={currentStep} updateCurrentStepTitle={setStepTitle} />
        <Step7 currentStep={currentStep} updateCurrentStepTitle={setStepTitle} />

      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Continuar</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default SignUp;
