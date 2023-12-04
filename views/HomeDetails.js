import { View, Text, StyleSheet} from 'react-native';
//Phạm Văn Đạt - 20520155
const HomeDetails = () => {

  return (
    <View style={styles.container}>
      <Text>Home Details Screen</Text>
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

export default HomeDetails;