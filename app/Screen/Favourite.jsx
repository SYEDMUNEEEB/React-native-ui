import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const favoriteTracks = [
  {
    id: '1',
    title: 'Birds of a Feather',
    artist: 'Billie Eilish',
    rating: 4.6,
    plays: '26k',
    image: require('../../assets/images/mosh.jpg'),
  },
  {
    id: '2',
    title: 'That’s So True',
    artist: 'Gracie Abrams',
    rating: 3.1,
    plays: '214',
    image: require('../../assets/images/mosh.jpg'),
  },
  {
    id: '3',
    title: 'All I want for Christmas is y...',
    artist: 'Mariah Carey',
    rating: 2.1,
    plays: '15k',
    image: require('../../assets/images/mosh.jpg'),
  },
    {
    id: '4',
    title: 'All I want for Christmas is y...',
    artist: 'Mariah Carey',
    rating: 2.1,
    plays: '15k',
    image: require('../../assets/images/mosh.jpg'),
  },
    {
    id: '5',
    title: 'All I want for Christmas is y...',
    artist: 'Mariah Carey',
    rating: 2.1,
    plays: '15k',
    image: require('../../assets/images/mosh.jpg'),
  },
    {
    id: '6',
    title: 'All I want for Christmas is y...',
    artist: 'Mariah Carey',
    rating: 2.1,
    plays: '15k',
    image: require('../../assets/images/mosh.jpg'),
  },
]

const renderStars = (rating) => {
  const fullStars = Math.floor(rating)
  const stars = []

  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesome
        key={i}
        name={i < fullStars ? 'star' : 'star-o'}
        size={14}
        color="#FFD700"
        style={{ marginRight: 2 }}
      />
    )
  }

  return <View style={styles.stars}>{stars}</View>
}

const Favourite = () => {
  return (
    <FlatList
      data={favoriteTracks}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
            <View style={styles.detailsRow}>
              {renderStars(item.rating)}
              <Text style={styles.plays}>{item.plays}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={20} color="#727D73" />
          </TouchableOpacity>
        </View>
      )}
    />
  )
}

export default Favourite

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F8F9FA',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    color: '#2B2B2B',
  },
  artist: {
    fontSize: 12,
    color: '#727D73',
    marginBottom: 4,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
    marginRight: 10,
  },
  plays: {
    fontSize: 12,
    color: '#A1A1A1',
  },
})
