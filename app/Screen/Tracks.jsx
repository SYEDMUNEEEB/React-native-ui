import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Tracks = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/chair.jpg')} 
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Connect and Explore Your Music</Text>
      <Text style={styles.subtitle}>
        Sync your playlists from Spotify or Apple Music to discover, review, and share your favorite tracks.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tracks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#FF007F',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
