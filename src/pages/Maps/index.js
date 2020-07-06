import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { View, Image, Text, TextInput } from "react-native";
import * as Location from "expo-location";

import locationImg from "../../assets/location.png";

import bars from "../../data/bars";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Maps = () => {
  const navigation = useNavigation();

  const handleNavigateToDetail = () => {
    navigation.navigate('Detail');
  }
  return (
    <View style={styles.container}>
      <View style={styles.search}>
          <Text style={styles.searchText}>Fala, Gabriel</Text>
          <TextInput style={styles.searchInput} placeholder="Onde vamos hoje" />
        </View>
      <MapView
        style={styles.maps}
        onPress={() => {}}
        initialRegion={{
          latitude: -28.2387708,
          longitude: -52.3719842,
          latitudeDelta: 0.014,
          longitudeDelta: 0.014,
        }}
      >
        {bars.map((bar) => (
          <Marker
            key={bar.id}
            style={styles.mapMarker}
            onPress={() => handleNavigateToDetail()}
            coordinate={{
              latitude: bar.latitude,
              longitude: bar.longitude,
            }}
          >
            <Image source={locationImg} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Maps;
