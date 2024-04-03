import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../../../../../../theme/bgcol'
import { useNavigation } from '@react-navigation/native'

const MGISunHLR = () => {
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
        <Text style={styles.title}>Hanging Leg Raises </Text>
        <Text style={styles.title}>(4 sets of 12 reps) </Text>
      </View>

      <SafeAreaView style={{flexDirection: 'row', justifyContent: 'center',marginTop:15}}>
          <Image
            source={require('../../MGIAssets/HangingLegRaiseM.gif')}
            style={{height:250,width:200}}
          />
      </SafeAreaView>

      <View style={{marginTop:20}}>
        <Text style={styles.header}>How To Perform - </Text>
        <Text style={styles.discrip}> 1 - Hang from a pull-up bar and raise your legs to a 90-degree angle</Text>
        <Text style={styles.discrip}> 2 - Engage your core throughout the movement</Text>
      </View>

      <View style={{marginTop:20}}>
        <Text style={styles.header}>Uses</Text>
        <Text style={styles.discrip}>  Hanging leg raises can also help build hip flexor strength, active flexibility, and functional strength</Text>
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
    marginHorizontal:5
  },
  header:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'600',
    color:'#464545',
    marginHorizontal:5
  }
})

export default MGISunHLR


