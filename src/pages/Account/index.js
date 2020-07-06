import React from "react";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";

import { useAuth } from '../../contexts/auth';

import styles from "./styles";

import profileImg from "../../assets/profile.png";
import couponsImg from "../../assets/coupons.png";
import favoritesImg from "../../assets/favorites.png";
import checkinsImg from "../../assets/checkins-menu.png";
// import couponsImg from '../../assets/';
import addressImg from "../../assets/address.png";
import arrow from "../../assets/arrow.png";

const Account = () => {
  const { signOut } = useAuth()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={profileImg} />
        <View style={styles.profile}>
          <Text style={styles.nameText}>Gabriel Amaral</Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.buttonText}>Editar perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => {}} style={styles.menuItem}>
            <Image source={couponsImg} />
            <View style={styles.menuItemTexts}>
              <Text style={styles.menuItemText}>Meus cupons</Text>
              <Text style={styles.menuItemText2}>Cupons disponíveis</Text>
            </View>
            <Image source={arrow} style={styles.menuItemArrowImg} />
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity onPress={() => {}} style={styles.menuItem}>
            <Image source={favoritesImg} />
            <View style={styles.menuItemTexts}>
              <Text style={styles.menuItemText}>Favoritos</Text>
              <Text style={styles.menuItemText2}>
                Bares salvos como favoritos
              </Text>
            </View>

            <Image source={arrow} style={styles.menuItemArrowImg} />
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity onPress={() => {}} style={styles.menuItem}>
            <Image source={checkinsImg} />
            <View style={styles.menuItemTexts}>
              <Text style={styles.menuItemText}>Meus ChekIns</Text>
              <Text style={styles.menuItemText2}>Seus pedidos </Text>
            </View>

            <Image source={arrow} style={styles.menuItemArrowImg} />
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity onPress={() => {}} style={styles.menuItem}>
            <Image source={addressImg} />
            <View style={styles.menuItemTexts}>
              <Text style={styles.menuItemText}>Meu endereço</Text>
              <Text style={styles.menuItemText2}>Endereço cadastrado</Text>
            </View>

            <Image source={arrow} style={styles.menuItemArrowImg} />
          </TouchableOpacity>
          <View style={styles.line} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonLogout} onPress={signOut}>
          <Text style={styles.buttonLogoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;
