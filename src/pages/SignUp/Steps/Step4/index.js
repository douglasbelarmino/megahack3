import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image } from "react-native";

import maleImg from "../../../../assets/male.png";
import femaleImg from "../../../../assets/female.png";

import styles from "./styles";

const Step4 = ({ currentStep, updateCurrentStepTitle }) => {
  const [genre, setGenre] = useState({
    male: false,
    female: false,
  });

  const handleClickGenre = (genre) => {
    setGenre({ male: false, female: false, [genre]: true });
  };

  if (currentStep !== 4) return null;
  
  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>Qual é o seu sexo?</Text>
      <View style={styles.genres}>
        <View
          style={[styles.genre, genre.male ? styles.genreSelected : {}]}
          onTouchStart={() => handleClickGenre("male")}
        >
          <Image source={maleImg} />
          <Text style={styles.genreText}>Masculino</Text>
        </View>
        <View
          style={[styles.genre, genre.female ? styles.genreSelected : {}]}
          onTouchStart={() => handleClickGenre("female")}
        >
          <Image source={femaleImg} />
          <Text style={styles.genreText}>Feminino</Text>
        </View>
      </View>
    </View>
  );
};

export default Step4;
