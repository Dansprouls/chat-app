import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Start = ({ navigation }) => {
  const backgroundImage = require("../chatapp-assets/BackgroundImage.png");

  const backgroundColors = {
    a: "#090C08",
    b: "#474056",
    c: "#8A95A5",
    d: "#B9C6AE",
  };

  const [name, setName] = useState("");
  const [color, setColor] = useState(backgroundColors.a);

  return (
    /*<View style={styles.container}>
      <Text> Welcome to ChatApp!</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="Your Name"
      />
      <Button
        title="Go to Chat Screen"
        onPress={() => navigation.navigate("Chat", { name: name })}
      />
    </View>
    */

    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.bgImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.chatTitle}>ChatApp</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Your Name"
          />
          <Text style={styles.colorSelectorTitle}>
            Choose a background color:
          </Text>
          <View style={styles.bgColorWrapper}>
            <TouchableOpacity
              style={[
                styles.colorCircle,
                color === backgroundColors.a && styles.activeColorCircle,
                { backgroundColor: backgroundColors.a },
              ]}
              onPress={() => setColor(backgroundColors.a)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.colorCircle,
                color === backgroundColors.b && styles.activeColorCircle,
                { backgroundColor: backgroundColors.b },
              ]}
              onPress={() => setColor(backgroundColors.b)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.colorCircle,
                color === backgroundColors.c && styles.activeColorCircle,
                { backgroundColor: backgroundColors.c },
              ]}
              onPress={() => setColor(backgroundColors.c)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.colorCircle,
                color === backgroundColors.d && styles.activeColorCircle,
                { backgroundColor: backgroundColors.d },
              ]}
              onPress={() => setColor(backgroundColors.d)}
            ></TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Chat", { name: name, color: color })
            }
          >
            <Text style={styles.buttonText}>Get chatting!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
    justifyContent: "space-between",
    padding: "6%",
  },
  chatTitle: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
    alignSelf: "center",
    marginBottom: 100,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    padding: "6%",
    paddingBottom: 20,
  },
  textInput: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    padding: 15,
    borderWidth: 1,
    borderColor: "#757083",
    marginTop: 15,
    marginBottom: 15,
  },
  colorSelectorTitle: {
    fontSize: 16,
    fontWeight: "300",
    color: "#8A95A5",
    marginBottom: 10,
  },
  bgColorWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  colorCircle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  activeColorCircle: {
    borderWidth: 2,
    borderColor: "#FCE205",
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Start;
