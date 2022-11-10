import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import React from 'react'

const Menu = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate('About')}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/nolan/344/about.png"
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate('Contact')}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://cdn2.iconfinder.com/data/icons/scenarium-vol-1-2/128/021_team_work_contacts_social_friends_messages_workplace-512.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate('Course')}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/344/external-certificate-online-learning-photo3ideastudio-gradient-photo3ideastudio.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate('User')}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/dusk/344/circled-user-male-skin-type-7.png",
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textStyle: {
    textTransform: "uppercase"
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  }
})

export default Menu;