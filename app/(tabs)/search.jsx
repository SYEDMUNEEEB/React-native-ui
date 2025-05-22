import { StyleSheet, Text, View } from 'react-native'

const Search = () => {
  return (
    <View style={styles.Search}>
      <Text>Search</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({

  Search:{  backgroundColor:'#fff',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    flex:1
  }
})