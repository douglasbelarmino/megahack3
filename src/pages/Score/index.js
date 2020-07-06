import React from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";

import styles from "./styles";

import trophyImg from "../../assets/trofeu.png";
import starImg from "../../assets/star2.png";

const Score = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={trophyImg} />

        <View style={styles.titleView}>
          <Image source={starImg} />
          <Text style={styles.titleViewText}> Carolina Ferreira</Text>
        </View>
        <Text style={styles.scoreText}>11.254 pontos</Text>

        <View style={styles.scorePople}>
          <View style={styles.buttons}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={[
                styles.button,
                { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
              ]}
            >
              <Text style={styles.buttonText}>24 horas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={[
                styles.button,
                {
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: "#fff",
                },
              ]}
            >
              <Text style={[styles.buttonText, { color: "#00448C" }]}>
                7 dias
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.scoreItem}>
            <View style={styles.scoreScore}>
              <Image source={starImg} />
              <Text style={styles.scoreItemNameText}> Carolina Ferreira</Text>
            </View>
            <Text style={styles.scoreItemValueText}>+15 pnts</Text>
          </View>

          <View style={styles.scoreItem}>
            <View style={styles.scoreScore}>
              <Image source={starImg} />
              <Text style={styles.scoreItemNameText}> Eduarda Barbosa</Text>
            </View>
            <Text style={styles.scoreItemValueText}>+05 pnts</Text>
          </View>

          <View style={styles.scoreItem}>
            <View style={styles.scoreScore}>
              <Image source={starImg} />
              <Text style={styles.scoreItemNameText}> Pedir uma água</Text>
            </View>
            <Text style={styles.scoreItemValueText}>+10 pnts</Text>
          </View>
        </View>

        <View style={styles.line} />

        <Text style={styles.scoreKeyText}>Sua pontuação</Text>
        <Text style={styles.scoreValueText}>2.187 pontos</Text>

        <View style={styles.line} />

        <Text style={styles.checkinText}>Seu check in no Bar da Boa</Text>
        <View style={styles.checkins}>
          <View style={styles.checkin}>
            <View style={styles.checkinCheckin}>
              <Image source={starImg} />
              <Text style={styles.checkinNameText}>
                {" "}
                Fazer check in em um bar
              </Text>
            </View>
            <Text style={styles.checkinValueText}>+15 pnts</Text>
          </View>

          <View style={styles.checkin}>
            <View style={styles.checkinCheckin}>
              <Image source={starImg} />
              <Text style={styles.checkinNameText}> Pedir uma cerveja</Text>
            </View>
            <Text style={styles.checkinValueText}>+05 pnts</Text>
          </View>

          <View style={styles.checkin}>
            <View style={styles.checkinCheckin}>
              <Image source={starImg} />
              <Text style={styles.checkinNameText}> Pedir uma água</Text>
            </View>
            <Text style={styles.checkinValueText}>+10 pnts</Text>
          </View>
        </View>

        <View style={styles.line} />
      </View>
    </ScrollView>
  );
};

export default Score;
