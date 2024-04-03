import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView,Video } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../../../../../../theme/bgcol'
import { useNavigation } from '@react-navigation/native'

const MGBSunSLP = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor:themeColors.bg, flex:1}} >
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <TouchableOpacity
            style={styles.arrow}
            onPress={() => navigation.goBack()}>
            <Image source={require('../../../../../../assets/icons/backArrow.png')} style={styles.arrowA} />
          </TouchableOpacity>
      </View>

      <View style={{marginTop:20}}>
        <Text style={styles.title}>Seated Leg Press (3 sets of 10 reps) </Text>
      </View>

      <SafeAreaView style={{flexDirection: 'row', justifyContent: 'center',marginTop:15}}>
          <Image
            source={require('../../MGBAssets/setLegPreM.gif')}
            style={{height:250,width:240}}
          />
      </SafeAreaView>

      <View style={{marginTop:20}}>
        <Text style={styles.header}>How To Perform - </Text>
        <Text style={styles.discrip}>1 -  Sit in the leg press machine and place your feet shoulder-width apart on the platform</Text>
        <Text style={styles.discrip}>2 -  Push the platform away from you by extending your legs, then bend your knees to return to the starting position</Text>
      </View>

      <View style={{marginTop:20}}>
        <Text style={styles.header}>Uses</Text>
        <Text style={styles.discrip}>  The leg press targets and strengthens many of the same muscle groups as the squat and deadlift, including the quadriceps, hamstrings, and glutes</Text>
      </View>

    </ScrollView>
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
  },
  discrip:{
    // textAlign:'center',
    fontSize:20,
    fontWeight:'600',
    color:'#464545',
    marginHorizontal:8
  },
  header:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'600',
    color:'#464545',
    marginHorizontal:5
  }
})

export default MGBSunSLP


