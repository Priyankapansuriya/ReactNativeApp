import { Linking, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { Nunito_700Bold } from '@expo-google-fonts/nunito'
import { WorkSans_400Regular } from '@expo-google-fonts/work-sans'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

const About = () => {

let [fontsLoaded] = useFonts({
  Nunito_700Bold ,
  WorkSans_400Regular
}) 

if (!fontsLoaded) {
  <AppLoading />
}
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Steve Brown</Text>
      <Text style={[styles.paraStyle, styles.aboutPara]}>Developer</Text>
    <View>
      <Image 
        style={styles.imgStyle}
        source={{
          uri:"https://wallpapercave.com/wp/wp9683114.jpg"
        }}
      />
    </View>
    <View style={styles.aboutLayout}>
      <Text style={styles.aboutSubHeader}>About Me</Text>
      <Text style={styles.aboutPara}>
      Software developers design, program, build, deploy and maintain software using many different skills and tools.
      They also help build software systems that power networks and devices and ensure that those systems remain functional.
      </Text>
    </View>
    <Text style={styles.mainHeader}>Follow me on social networks</Text>
    
    <View style={styles.menuContainer}>
      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={() => Linking.openURL("https://www.instagram.com/")}
      >
        <Image
          style={styles.iconStyle}
          source={{uri:"https://cdn-icons-png.flaticon.com/128/3955/3955024.png"}}
          resizeMode='contain'
         />
      </TouchableOpacity>
      
      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={() => Linking.openURL("https://www.linkedin.com/")}
      >
        <Image
          style={styles.iconStyle}
          source={{uri:"https://cdn-icons-png.flaticon.com/128/145/145807.png"}}
         />
      </TouchableOpacity>
      
      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={() => Linking.openURL("https://github.com/")}
      >
        <Image
          style={styles.iconStyle}
          source={{uri:"https://cdn-icons-png.flaticon.com/128/270/270798.png"}}
         />
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={() => Linking.openURL("https://web.skype.com/")}
      >
        <Image
          style={styles.iconStyle}
          source={{uri:"https://cdn-icons-png.flaticon.com/128/174/174869.png"}}
         />
      </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    // marginTop: 50,
    marginTop: 50,
    marginBottom: 10,
    fontFamily: "Nunito_700Bold",
    justifyContent:"center",
    display:"flex"
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
    fontFamily: "WorkSans_400Regular",
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    // marginVertical: 30,
    marginTop: 20,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "Nunito_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 26,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
    marginTop:40
  },
})

export default About

