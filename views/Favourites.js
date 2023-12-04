import { View, Text, StyleSheet } from 'react-native';
//Phạm Văn Đạt - 20520155
const Favourites = () => {
  return (
    <View style={styles.container}>
      <Text>Favourites Screen</Text>
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

export default Favourites;