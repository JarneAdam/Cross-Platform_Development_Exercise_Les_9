import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import CardList from './src/components/CardList';
import pokemon from './src/data/pokemon.js';

export default function App() {
  const viewAction = name => {};

  const bookmarkAction = name => {};

  const shareAction = name => {};

  return (
    <View style={styles.container}>
      <Header title='Accessibility test' />
      <CardList
          data={pokemon}
          viewAction={viewAction}
          bookmarkAction={bookmarkAction}
          shareAction={shareAction}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#333"
  }
});
