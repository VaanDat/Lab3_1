import { View, Text, StyleSheet } from 'react-native';
//Phạm Văn Đạt - 20520155
const Categories1 = () => {
  return (
    <View style={styles.container}>
      <Text>Categories 1 Screen</Text>
    </View>
  );
};

const Categories2 = () => {
  return (
    <View style={styles.container}>
      <Text>Categories 2 Screen</Text>
    </View>
  );
};

const Categories3 = () => {
  return (
    <View style={styles.container}>
      <Text>Categories 3 Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default { Categories1, Categories2, Categories3 };