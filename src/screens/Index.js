import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu';
import { WorkSans_400Regular } from '@expo-google-fonts/work-sans';
import { Nunito_700Bold } from '@expo-google-fonts/nunito';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Index = (props) => {
  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
    WorkSans_400Regular,
  });

  if (fontsLoaded) {
    <AppLoading />
  }

  const description = "Online learning is education that takes place over the Internet. It is often referred to as “e- learning” among other terms. However, online learning is just one type of “distance learning” - the umbrella term for any learning that takes place across distance and not in a traditional classroom."

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/logo.jpg")}
        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text style={[styles.mainHeader,
        {
          fontSize: 33,
          color: "#4c5dab",
          marginTop: 0,
        }
        ]}>
          {props.channelName}</Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle, { marginVertical: 10 },]}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  homeTop: {
    // height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    fontFamily: "Nunito_700Bold",
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 27,
    fontFamily: "WorkSans_400Regular",
  },

  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
})
export default Index

