import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>holy shit</Text>
      <StatusBar style="auto" />
      <Button
        title={'React Native Elements'}
        icon={{
          name: 'home',
          type: 'font-awesome',
          size: 15,
          color: 'white'
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
