import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import CardList from './src/components/CardList';
import pokemon from './src/data/pokemon.js';

export default function App() {
  const viewAction = name => {};

  const bookmarkAction = name => {};

  const shareAction = name => {};

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar translucent={false} backgroundColor="#fff" />
        <Header title='Accessibility test' />
        <CardList
            data={pokemon}
            viewAction={viewAction}
            bookmarkAction={bookmarkAction}
            shareAction={shareAction}
          />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#fff"
  }
});
