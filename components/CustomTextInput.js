import { View, TextInput, StyleSheet } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
//Phạm Văn Đạt - 20520155
const CustomTextInput = ({ placeholder, icon, value, handleTextChange }) => {
  return (
    <View style={styles.inputContainer}>
      <IonIcon name={icon} size={25} style={styles.icon} />
      <TextInput 
        style={styles.input} 
        placeholder={placeholder}
        value={value}
        onChangeText={handleTextChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
    marginLeft: 20,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default CustomTextInput;