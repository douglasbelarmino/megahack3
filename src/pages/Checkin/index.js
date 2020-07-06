import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";

import styles from "./styles";

import checkinImg from "../../assets/checkin.png";
import qrCodeImg from "../../assets/qrcode.png";
import checkinSuccessImg from "../../assets/checkinSuccess.png";
import starImg from "../../assets/star2.png";
import { useNavigation } from "@react-navigation/native";

const Checkin = () => {
  const [showQrCode, setShowQrCode] = useState(true);
  const [showCheckin, setShowCheckin] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setShowQrCode(false);
      setShowCheckin(true);
      setTimeout(() => {
        setShowCheckin(false);
      }, 2000);
    }, 2000);

    return () => {
      setShowQrCode(true);
      setShowCheckin(false);
    };
  }, []);

  const handleNavigateToPortfolio = () => {
    navigation.navigate('Portfolio');
  }

  return (
      <View style={styles.container}>
        {showQrCode ? (
        <View style={styles.checkin}>
          <Image source={checkinImg} />
          <Image source={qrCodeImg} style={{ position: "absolute"}} />
        </View>
      ) : (
        <View></View>
      )}

      <Text> </Text>

      {showCheckin ? (
        <View style={styles.checkinSuccess}>
          <Text style={styles.checkinSuccessText}>Check In realizado</Text>
          <Image source={checkinSuccessImg} />
        </View>
      ) : (
        <View></View>
      )}

        {!showCheckin ? (
          <ScrollView>

          <View style={styles.account}>
            <Text style={styles.accountText}>Sua conta</Text>

            <View style={styles.line} />

            <Text style={styles.amountValueText}>R$ 60,15</Text>

            <View style={styles.line} />

            <View style={styles.items}>
              <View style={styles.item}>
                <Text style={styles.itemKeyText}>3x</Text>
                <Text style={styles.itemValueText}> Cerveja Budweiser</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.itemKeyText}>6x</Text>
                <Text style={styles.itemValueText}> Cerveja Budweiser</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.itemKeyText}>4x</Text>
                <Text style={styles.itemValueText}> Cerveja Budweiser</Text>
              </View>
            </View>

            <View style={styles.line} />

            <View style={styles.score}>
              <Text style={styles.scoreTitleText}>Pontos ja adiquiridos</Text>

              <Text style={styles.scoreValue}>45 pontos</Text>

              <View style={styles.bar}>
                {/* <Image source={starImg} /> */}
                <View style={styles.progressBar}>
                  <View style={styles.progressBarScore} />
                </View>
              </View>
              <View style={styles.scoreItem}>
                <View style={styles.scoreScore}>
                  <Image source={starImg} />
                  <Text style={styles.scoreItemNameText}>
                    {" "}
                    Fazer chekIn em um bar
                  </Text>
                </View>
                <Text style={styles.scoreItemValueText}>+15 pnts</Text>
              </View>

              <View style={styles.scoreItem}>
                <View style={styles.scoreScore}>
                  <Image source={starImg} />
                  <Text style={styles.scoreItemNameText}>
                    {" "}
                    Pedir uma cerveja
                  </Text>
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

            <View style={styles.buttonView}>
              <RectButton style={styles.button} onPress={handleNavigateToPortfolio}>
                <Icon name="plus" size={50} color="#fff" />
              </RectButton>
            </View>
          </View>
          </ScrollView>
        ) : (
          <View />
        )}
      </View>
  );
};

export default Checkin;
