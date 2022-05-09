import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TextInput,
  Switch
} from "react-native";

export default function App() {
  const [number, setNumber] = useState();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {}, []);

  function onChangeNumber(e) {
    setNumber(e);
  }

  function showNumber() {
    alert(number);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <Text style={styles.title}>Luca Palminteri</Text>
        <Text style={styles.text}>
          {"\n"}
          This a paragraph about how much I love coding Apps, and React Native
          gave me the ability to transform my web development knowledge into app
          development. This is something I'm really excited about.
          {"\n"}
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://lucapalminteri.com/static/media/luca-five.09fc7dd50b27e48fb99e.png",
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="default"
        />
        <Text style={styles.text}>
          {"\n"}
          This a paragraph about how much I love coding Apps, and React Native
          gave me the ability to transform my web development knowledge into app
          development. This is something I'm really excited about.
          {"\n"}
        </Text>
        <Text style={styles.text}>
          {"\n"}
          This a paragraph about how much I love coding Apps, and React Native
          gave me the ability to transform my web development knowledge into app
          development. This is something I'm really excited about.
          {"\n"}
        </Text>
        <Text style={styles.text}>
          {"\n"}
          This a paragraph about how much I love coding Apps, and React Native
          gave me the ability to transform my web development knowledge into app
          development. This is something I'm really excited about.
          {"\n"}
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.text}>
          {"\n"}
          This a paragraph about how much I love coding Apps, and React Native
          gave me the ability to transform my web development knowledge into app
          development. This is something I'm really excited about.
          {"\n"}
        </Text>

        <View style={styles.footer}>
          <Button
            title="Show Input"
            onPress={showNumber}
            style={styles.button}
            color="#565656"
          />
          <Button
            title="+1"
            onPress={() => undefined}
            style={styles.button}
            color="#565656"
          />
        </View>
        <View style={styles.space}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dcdcdc",
    position: "relative",
  },
  title: {
    paddingTop: 40,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#ababab",
    width: "100%",
  },
  text: {
    paddingHorizontal: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingVertical: 20
  },
  image: {
    width: "100%",
    height: 360,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#898989",
    width: "100%",
    height: 75,
    paddingHorizontal: 0,
    position: "absolute",
    bottom: 0,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  space: {
    height: 75,
  },
});
