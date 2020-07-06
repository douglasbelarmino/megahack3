import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Modal, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";

import styles from "./styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import budweiserImg from "../../assets/budweiser_330ml.png";
import becksImg from "../../assets/becks_330ml.png";
import stellaImg from "../../assets/stella-artois_550ml.png";
import coronaImg from "../../assets/corona_355ml.png";
import antarcticaImg from "../../assets/antarctica_300ml.png";
import skolImg from "../../assets/skol_300ml.png";
import brahmaImg from "../../assets/brahma_300ml.png";

const categories = [
  {
    id: 1,
    name: "Cervejas",
  },
  {
    id: 2,
    name: "Águas",
  },
  {
    id: 3,
    name: "Sucos",
  },
  {
    id: 4,
    name: "Refrigerantes",
  },
];

const Portfolio = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState("1");


  const handleModalShow = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Portfólio</Text>
      <View style={styles.categories}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={String(category.id)}
              style={styles.category}
              activeOpacity={0.6}
              onPress={() => {}}
            >
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.line} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.drinks}>
          <TouchableOpacity
            onPress={handleModalShow}
            activeOpacity={0.6}
            style={styles.drink}
          >
            <View style={styles.drinkInfo}>
              <Image source={budweiserImg} />
              <View style={styles.drinkInfoTexts}>
                <Text style={styles.drinkInfoText}>Budweiser</Text>
                <Text style={styles.drinkInfoText2}>330ml</Text>
              </View>
            </View>
            <Text style={styles.drinkAmountText}>R$ 8,00</Text>
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity
            onPress={handleModalShow}
            activeOpacity={0.6}
            style={styles.drink}
          >
            <View style={styles.drinkInfo}>
              <Image source={stellaImg} />
              <View style={styles.drinkInfoTexts}>
                <Text style={styles.drinkInfoText}>Stella Artois</Text>
                <Text style={styles.drinkInfoText2}>330ml</Text>
              </View>
            </View>

            <Text style={styles.drinkAmountText}>R$ 8,00</Text>
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity
            onPress={handleModalShow}
            activeOpacity={0.6}
            style={styles.drink}
          >
            <View style={styles.drinkInfo}>
              <Image source={becksImg} />
              <View style={styles.drinkInfoTexts}>
                <Text style={styles.drinkInfoText}>Becks</Text>
                <Text style={styles.drinkInfoText2}>330ml</Text>
              </View>
            </View>
            <Text style={styles.drinkAmountText}>R$ 8,00</Text>
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity
            onPress={handleModalShow}
            activeOpacity={0.6}
            style={styles.drink}
          >
            <View style={styles.drinkInfo}>
              <Image source={coronaImg} />
              <View style={styles.drinkInfoTexts}>
                <Text style={styles.drinkInfoText}>Corona</Text>
                <Text style={styles.drinkInfoText2}>330ml</Text>
              </View>
            </View>
            <Text style={styles.drinkAmountText}>R$ 8,00</Text>
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity
            onPress={handleModalShow}
            activeOpacity={0.6}
            style={styles.drink}
          >
            <View style={styles.drinkInfo}>
              <Image source={antarcticaImg} />
              <View style={styles.drinkInfoTexts}>
                <Text style={styles.drinkInfoText}>Antarctica</Text>
                <Text style={styles.drinkInfoText2}>330ml</Text>
              </View>
            </View>
            <Text style={styles.drinkAmountText}>R$ 4,00</Text>
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity
            onPress={handleModalShow}
            activeOpacity={0.6}
            style={styles.drink}
          >
            <View style={styles.drinkInfo}>
              <Image source={skolImg} />
              <View style={styles.drinkInfoTexts}>
                <Text style={styles.drinkInfoText}>Skol</Text>
                <Text style={styles.drinkInfoText2}>330ml</Text>
              </View>
            </View>
            <Text style={styles.drinkAmountText}>R$ 4,00</Text>
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity
            onPress={handleModalShow}
            activeOpacity={0.6}
            style={styles.drink}
          >
            <View style={styles.drinkInfo}>
              <Image source={brahmaImg} />
              <View style={styles.drinkInfoTexts}>
                <Text style={styles.drinkInfoText}>Brahma</Text>
                <Text style={styles.drinkInfoText2}>330ml</Text>
              </View>
            </View>
            <Text style={styles.drinkAmountText}>R$ 4,00</Text>
          </TouchableOpacity>
          <View style={styles.line} />
        </View>
      </ScrollView>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView} onTouchEnd={handleModalShow}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitleText}>Quantidade</Text>
              <View style={styles.line} />

              <View style={styles.drink}>
                <View style={styles.drinkInfo}>
                  <Image source={budweiserImg} />
                  <View style={styles.drinkInfoTexts}>
                    <Text style={styles.drinkInfoText}>Budweiser</Text>
                    <Text style={styles.drinkInfoText2}>330ml</Text>
                  </View>
                </View>
                <Text style={styles.drinkAmountText}>R$ 4,00</Text>
              </View>

              <View style={styles.controls}>
                <RectButton style={styles.controlButton}>
                  <Icon name="minus" size={30} color="#00448C" />
                </RectButton>
                <TextInput style={styles.input} keyboardType="numeric" value={quantity} />
                <RectButton style={styles.controlButton}>
                  <Icon name="plus" size={30} color="#00448C" />
                </RectButton>
              </View>
              <RectButton style={styles.button} onPress={handleModalShow}>
                <Text style={styles.buttonText}>Pedir</Text>
              </RectButton>
            </View>
          </View>
        </Modal>
      </View>
  );
};

export default Portfolio;
