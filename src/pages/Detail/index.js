import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";

import barImg from "../../assets/barImg.png";
import starImg from "../../assets/star.png";
import star2Img from "../../assets/star2.png";
import heartImg from "../../assets/heart.png";
import budweiserImg from "../../assets/budweiser_330ml.png";
import becksImg from "../../assets/becks_330ml.png";
import stellaImg from "../../assets/stella-artois_550ml.png";
import coronaImg from "../../assets/corona_355ml.png";
import locationImg from "../../assets/location.png";

import MapView, { Marker } from "react-native-maps";

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params;

  const barId = routeParams;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={barImg} />

        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>Bar da Boa</Text>
            <View style={styles.headerTitleStar}>
              <Image source={starImg} />
              <Text style={styles.headerTitleStarText}>4,9</Text>
            </View>
          </View>
          <Text style={styles.headerStatusText}>Aberto agora</Text>
          <Text style={styles.headerDescriptionText}>
            Bar temático da cervejaria Antarctica com noites de samba em
            ambiente alegre de casa do século XIX.
          </Text>

          <View style={styles.heart}>
            <Image source={heartImg} />
            <Text style={styles.heartText}>
              Aqui tem a sua bebida favorita!
            </Text>
          </View>

          <Text style={styles.scoreTitle}>Rainha do Pedaço</Text>
          <View style={styles.score}>
            <View style={styles.scoreScore}>
              <Image source={star2Img} />
              <Text style={styles.scoreScoreText}>Carolina Ferreira</Text>
            </View>

            <Text style={styles.scoreText}>11.254 pontos</Text>
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.bodyText}>Portifólio</Text>

          <View style={styles.drinks}>
            <View style={styles.drink}>
              <Image source={budweiserImg} />
              <View style={styles.drinkTexts}>
                <Text style={styles.drinkText}>Budweiser</Text>
                <Text style={styles.drinkText2}>330ml</Text>
              </View>
            </View>
            <View style={styles.drink}>
              <Image source={becksImg} />
              <View style={styles.drinkTexts}>
                <Text style={styles.drinkText}>Becks</Text>
                <Text style={styles.drinkText2}>330ml</Text>
              </View>
            </View>
          </View>
          <View style={styles.drinks}>
            <View style={styles.drink}>
              <Image source={stellaImg} />
              <View style={styles.drinkTexts}>
                <Text style={styles.drinkText}>Stella Artois</Text>
                <Text style={styles.drinkText2}>330ml</Text>
              </View>
            </View>
            <View style={styles.drink}>
              <Image source={coronaImg} />
              <View style={styles.drinkTexts}>
                <Text style={styles.drinkText}>Corona</Text>
                <Text style={styles.drinkText2}>330ml</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <MapView
            style={styles.maps}
            initialRegion={{
              latitude: -28.2387708,
              longitude: -52.3719842,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
            <Marker
              // onPress={() => handleNavigateToDetail(point.id)}
              coordinate={{
                latitude: -28.2387708,
                longitude: -52.3719842,
              }}
            >
              <Image source={locationImg} width={40} />
            </Marker>
          </MapView>

          <Text style={styles.addressKeyText}>
            Endereço:{" "}
            <Text style={styles.addressValueText}>
            R. Cel. Mundica, 42 - São José, Passo Fundo - RS, 99052-130
            </Text>
          </Text>

          <Text style={styles.addressKeyText}>
            Horário:{" "}
            <Text style={styles.addressValueText}>Aberto ⋅ Fecha às 03:00</Text>
          </Text>

          <Text style={[styles.addressKeyText, {marginBottom: 15}]}>
            Telefone:{" "}
            <Text style={styles.addressValueText}>(54) 3331-4512</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
