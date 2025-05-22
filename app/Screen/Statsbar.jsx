import { StyleSheet, Text, View } from 'react-native';

export default function StatsBar() {
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <View style={styles.statBox}>
          <Text style={styles.number}>2M</Text>
          <Text style={styles.label}>Followers</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.number}>2000</Text>
          <Text style={styles.label}>Following</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.number}>1200</Text>
          <Text style={styles.label}>Reviews</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  zIndex:99,
       
    justifyContent: 'center',  
    alignItems: 'center',    
   position:'relative',
   top:30
    
  },

stats: {

    backgroundColor: '#fff',   
    borderWidth: 1,           
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    alignItems: 'center',      
    minWidth: 80,
    flexDirection:'row'
  },
    statBox: {
    backgroundColor: '#fff', 
   
    borderRadius: 25,
    paddingVertical: 0,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    alignItems: 'center',     
   
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color:'black'
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
});
