import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Section from '../Screen/Section';
import StatsBar from '../Screen/Statsbar';
   
   const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);



 
  const handleEditProfile = async () => {

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Please allow access to your photos.');
      return;
    }


    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };
  return (
  <>

  <ScrollView>

    <View style={styles.screen}>
      <View style={styles.profile}>
        <Text style={styles.text}>Profile</Text>
    

      <View style={styles.edit}>
        <View style={styles.container}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.iconWrapper}>
              <Icon name="user-circle" size={40} color="#888" />

            </View>
          )}
          <TouchableOpacity style={styles.editIconContainer} onPress={handleEditProfile}>
            <Icon name="plus" size={10} color="#fff" />
          </TouchableOpacity>
        </View>

      <View  style={{position:'absolute',flex:1}}>

      <Text style={styles.goodmorning}>Good Morning.</Text>
      <Text style={styles.Name} > Jhonathan E. </Text>
     
      </View>
        <View style={styles.pencilIconedit}>
  <TouchableOpacity onPress={handleEditProfile} style={styles.editButton}>
    <Icon name="pencil" size={14} color="grey" style={styles.pencilIcon} />
    <Text style={styles.editText}>Edit</Text>
  </TouchableOpacity>
</View>

      </View>
  <StatsBar/>
        </View>
  <Section/>
    </View>
  </ScrollView>
     
 
  </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  profile: {
    alignItems: 'center',
    marginTop: 40,
    backgroundColor:'white'
  },
  text: {
    color: '#373A40',
    fontSize: 20,
 fontWeight: 'bold',
    marginTop:30,
   position:'static'
  },
  edit: {
       alignItems: 'center',
       marginTop: 40,
       backgroundColor:'white',
       borderBottomLeftRadius:20,
       borderBottomRightRadius:20
       

  },
  container: {
    position: 'relative',
    right:130,
    
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: 'red',
          borderWidth: 1,
    
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 33,
    right: 4,
    backgroundColor: '#FF007F',
    borderRadius: 20,
    padding: 5,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  },
  iconWrapper: {
  width: 60,
  height: 60,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: '#FF007F',
  alignItems: 'center',
  justifyContent: 'center',
},
goodmorning:{
  flex:1,
  position:'absolute',
  left:-90,
  
  top:8,
  fontSize:12,
  fontWeight:"bold",
  textAlign:'center',
  alignContent:'center',
  justifyContent:'center'
},
Name:{
  
    color:'#FF007F',
  position:'absolute',

  fontWeight:"heavy",
left:-95,
  
  top:25,
  fontSize:16,
fontWeight: 'bold',
  textAlign:'center',
  alignContent:'center',
  justifyContent:'center'
},
pencilIconedit:{
  justifyContent:'center',
  position:'relative',
  left:130,
  right:0,
  top:-50,
  justifyContent:'flex-end',

  
},
editButton: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#e0e0e0',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 10,
  justifyContent:'center'
},
editText: {
  color: '#727D73',
  fontWeight: '900',
  marginLeft: 6,
  fontSize: 14,
},
});
