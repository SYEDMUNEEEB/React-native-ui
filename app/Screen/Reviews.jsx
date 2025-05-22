import { MaterialIcons } from '@expo/vector-icons'
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'


const Reviews = () => {
  const handlePress = () => {
    console.log('clicked')
  }

  return (
    <>
      <ScrollView style={{

      }}>

        <View style={styles.Reviews}>
          <View style={styles.layout}>
            <Image source={require("../../assets/images/mosh.jpg")} style={styles.profileimage} />
            <View style={styles.content}>
              <View style={styles.headerRow}>
                <Text style={styles.name}>Kierra Culhane</Text>
                <View style={styles.menu}>
                  <TouchableHighlight onPress={handlePress} underlayColor="#eee" style={{ borderRadius: 20 }}>
                    <MaterialIcons name="more-vert" size={24} color="#727D73" />
                  </TouchableHighlight>
                </View>
              </View>
              <Text style={styles.date}>2 days ago</Text>
            </View>
          </View>
          <View style={styles.Track}>
            <Text style={styles.newTrack}>
              This Track is a Burst of energy. Chapell's Vocals are Fiery and the message is empowering. Instantly hooked.
            </Text>
          </View>
          <View style={styles.sections}>
            <Image source={require("../../assets/images/mosh.jpg")} style={{ width: 180, height: 150, borderRadius: 20 }} />
            <View style={styles.sectionimage}>
              <Image source={require("../../assets/images/mosh.jpg")} style={{ width: 90, height: 70, borderRadius: 20 }} />
              <Image source={require("../../assets/images/mosh.jpg")} style={{ width: 90, height: 70, borderRadius: 20 }} />
            </View>
          </View>
          <View style={styles.farewell}>
            <Image source={require("../../assets/images/mosh.jpg")} style={{ width: 60, height: 60, borderRadius: 20, padding: 20 }} />
            <Text style={styles.brick}>
              Farewell Yellow Brick Road Tour
            </Text>
   <Text style={styles.newBrick}>
              Farewell Yellow Brick Road Tour
            </Text>

          </View>

        </View>
      </ScrollView>
    </>
  )
}

export default Reviews

const styles = StyleSheet.create({
  Reviews: {
    margin: 10,


    flexDirection: 'column',
    backgroundColor: '#e3e2de',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  layout: {



    borderRadius: 20,
    flexDirection: 'row',


  },
  profileimage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 14,
  },
  content: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    color: '#4a4a49',
    fontWeight: '700',
    fontSize: 15,
  },
  date: {
    color: '#4a4a49',
    fontSize: 11,
    marginTop: 2,
    marginBottom: 6,
  },
  menu: {
    justifyContent: 'center',
    left: 200,
    position: 'absolute',

  },
  Track: {
    marginTop: 5,

  },
  newTrack: {
    color: '#7B8FA1',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "700"
  },
  sections: {
    marginTop: 10,
    marginRight: 20,
    flexDirection: "row",
    alignContent: 'center',
    justifyContent: 'center',

  },
  sectionimage: {
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    gap: 8,
  },
  farewell: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 10,
    padding: 10,
    gap: 5


  },
  brick: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 13,
    color: "#9E9FA5",
    marginTop: 10,
    fontWeight: '900',
    flexDirection: 'column'
  },
newBrick:{
  position:'absolute',
     justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    top:40,
    fontSize:12,
    left:75,
    color:"#B5C0D0"
}

})