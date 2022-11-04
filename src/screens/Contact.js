import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View ,Button} from 'react-native'
import React, { useState } from 'react'
import { WorkSans_400Regular } from '@expo-google-fonts/work-sans'
import { Nunito_700Bold } from '@expo-google-fonts/nunito'
import AppLoading from 'expo-app-loading'
import { useFonts } from '@expo-google-fonts/work-sans'
import Checkbox from 'expo-checkbox';

const Contact = ({navigation}) => {

let [fontsLoaded] = useFonts({
  Nunito_700Bold ,
  WorkSans_400Regular 
})
if (!fontsLoaded) {
  <AppLoading />
}

const [name , setName] = useState("");
const [email , setEmail] = useState("");
const [num , setNum] = useState("");
const [msg , setMsg] = useState("");
const [agree , setAgree] = useState(false);

const submit = () => {
  if (!name && !email && !num && !msg) {
    Alert.alert("Invalid Input","Plzz fill all the fields",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      }
    ])
    } else {
      Alert.alert("Yehh",`Thank You ${name}`,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ])
      navigation.navigate("Index");
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up your knowledge</Text>
      <Text style={styles.description}>You can reach us anytime</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Name</Text>
        <TextInput style={styles.inputStyle}
          placeholder={"Steve"}
          value={name}
          onChangeText={(userData)=>setName(userData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Email</Text>
        <TextInput style={styles.inputStyle}
          placeholder={"demo@gmail.com"}
          value={email}
          onChangeText={(email)=> setEmail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Mobile Number</Text>
        <TextInput style={styles.inputStyle}
          placeholder={"12345"}
          value={num}
          onChangeText={(num)=>setNum(num)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Message</Text>
        <TextInput style={[styles.inputStyle,styles.multiineStyle]}
          placeholder={"About You"} 
          value={msg}
          onChangeText={(msg)=>setMsg(msg)}
          numberOfLines={5}
          multiline={true}
        />
      </View>
    
    <View style={styles.wrapper}>
      <Checkbox 
        value={agree}
        onValueChange={()=> setAgree(!agree)}
        color={agree ? "#4630EB" : undefined}
      />
      <Text style={styles.wrapperText}>I have read and agreed with TC</Text>
    </View>

    <TouchableOpacity style={[styles.buttonStyle,
    {backgroundColor: agree ? "#4630EB" : "grey"} 
    ]}
    disabled={!agree}
    onPress={submit}
    >
      <Text style={styles.buttonText}>Contact Us</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 24,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "Nunito_700Bold",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    // fontWeight: "bold",
    fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "WorkSans_400Regular",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "WorkSans_400Regular",
  },
})

export default Contact

