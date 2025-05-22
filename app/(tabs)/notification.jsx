import { StyleSheet, Text, View } from 'react-native'

const Notification = () => {
  return (
    <View style={styles.Notification}>
      <Text>Notification</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({

  Notification:{
    backgroundColor:'#fff',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    flex:1
  }
})