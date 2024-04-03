import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../../../../../theme/bgcol'
import { useNavigation } from '@react-navigation/native'

const MGBSundayExe = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:themeColors.bg, flex:1}} >
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <TouchableOpacity
            style={styles.arrow}
            onPress={() => navigation.goBack()}>
            <Image source={require('../../../../../assets/icons/backArrow.png')} style={styles.arrowA} />
          </TouchableOpacity>
      </View>

      <View style={{marginTop:20}}>
        <Text style={styles.title}>10 Gym Exercises Begineer Level</Text>
      </View>

      <ScrollView style={{marginTop:20,marginBottom:10}}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Male gym begg sun BS')} >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Barbell Squats</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Male gym begg sun LP')} >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Lat Pulldowns</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Male gym begg sun DBP')} >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Dumbbell Bench Press</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Male gym begg sun SLP')} >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Seated Leg Press</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Male gym begg sun DR')} >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Dumbbell Rows</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Male gym begg sun MCF')} >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Machine Chest Flyes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Male gym begg sun CFP')} >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Cable Face Pulls</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Male gym begg sun LE')} >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Leg Extensions </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Male gym begg sun plank')} >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Plank</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Male gym begg sun cool')} >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Cool Down: 5-7 minutes</Text>
          </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  arrow:{
    backgroundColor:'#FED656',
    borderTopEndRadius:10,
    borderBottomLeftRadius:10,
    margin:5,
    marginLeft:8,
    padding:5,
  },
  arrowA:{
    height:30,
    width:30,
  },
  loginBtn:{
    backgroundColor:'#FED656',
    padding:15,
    marginHorizontal:20,
    marginTop:40,
    borderRadius:15,
  },
  title:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'600',
    color:'#464545',
    marginHorizontal:5
  }
})

export default MGBSundayExe


