import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Favourite from './Favourite';
import Reviews from './Reviews';
import Tracks from './Tracks';

const Section = () => {
  const [currentSection, setCurrentSection] = useState('section1');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.Reviews}>
          <TouchableOpacity
            style={[
              styles.button,
              currentSection === 'section1' && styles.activeButton
            ]}
            onPress={() => setCurrentSection('section1')}
          >
            <Text style={currentSection === 'section1' && styles.activeText}>Reviews</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              currentSection === 'section2' && styles.activeButton
            ]}
            onPress={() => setCurrentSection('section2')}
          >
            <Text style={currentSection === 'section2' && styles.activeText}>Favourites</Text>
          </TouchableOpacity>
                <TouchableOpacity
            style={[
              styles.button,
              currentSection === 'section3' && styles.activeButton
            ]}
            onPress={() => setCurrentSection('section3')}
          >
            <Text style={currentSection === 'section3' && styles.activeText}>Tracks</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {currentSection === 'section1' && <Reviews />}
        {currentSection === 'section2' && <Favourite />}
        {currentSection=== 'section3' && <Tracks/>}

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
   
   
  },
  button: {
 
    padding:7,
    paddingHorizontal:25,
    paddingVertical:7,
    borderRadius: 10,
    margin: 5,
  },
  activeButton: {
      backgroundColor: '#fff',
      color:'black',
      
  },
  activeText: {
    color: '#000',
    fontWeight: 'bold',
  },
  sectionContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
  },
  Reviews: {
    flexDirection: 'row',
    backgroundColor: "#e3e2de",
    borderRadius: 15,
    
  },
});

export default Section;