import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import logoImg from '../../assets/logo.png';

import styles from "./styles";
import { useAuth } from "../../contexts/auth";

const SignIn = () => {
  const { signed, signIn } = useAuth();
  const navigation = useNavigation();

  const handleNavigateToSignUp = () => {
    navigation.navigate("SignUp");
  }

  const handleNavigateToMaps = () => {
    navigation.navigate("Maps");
  }

  return (
    <>
      <View style={styles.container}>
        <Image source={logoImg} />

        <View style={styles.inputContainer}>
          <TextInput placeholder="E-mail" style={styles.input} />
          <TextInput placeholder="Senha" style={styles.input} />

          {/* <Text style={styles.message}></Text> */}
          <RectButton style={styles.button} onPress={signIn}>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>

          <TouchableOpacity style={styles.passwordButton} onPress={() => {}}>
            <Text style={styles.passwordButtonText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <View style={styles.facebookView}>
            <Text style={styles.facebookText}>Ou</Text>

            <RectButton style={styles.facebookButton} onPress={() => {}}>
              <Text style={styles.facebookButtonText}>
                Entrar com o facebook
              </Text>
            </RectButton>
          </View>
        
        <TouchableOpacity style={styles.SignUpButton} onPress={handleNavigateToSignUp}>
          <Text style={styles.SignUpButtonText}>Cadastrar-se</Text>
        </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SignIn;
