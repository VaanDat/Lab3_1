import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
//Phạm Văn Đạt - 20520155
const CustomButton = ({ title, onPress }) => {
  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#d97706",
    color: "white",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    marginTop: 30,
    fontSize: 18,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
});

export default CustomButton;