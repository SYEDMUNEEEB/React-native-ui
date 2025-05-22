import { StyleSheet, Text, View } from 'react-native'

const Activity = ({style}) => {
  return (
    <View style={styles.Activity} >
      <Text>Activity</Text>
    </View>
  )
}

export default Activity

const styles = StyleSheet.create({
  Activity:{
    backgroundColor:'#fff',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    flex:1
  }
})