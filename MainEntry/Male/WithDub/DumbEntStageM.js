import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../../../theme/bgcol'
import { useNavigation } from '@react-navigation/native'

const DumbEntStageM = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:themeColors.bg, flex:1}} >
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <TouchableOpacity
            style={styles.arrow}
            onPress={() => navigation.goBack()}>
            <Image source={require('../../../assets/icons/backArrow.png')} style={styles.arrowA} />
          </TouchableOpacity>
      </View>

      <View style={{marginTop:70}}>
        <Text style={styles.title}>Dumbbelles Exercises</Text>
      </View>

      <View style={{marginTop:100}}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Male dumb begg days')} >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Beginner</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Male dumb interme days')}>
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Intermediate</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Male dumb advance days')} >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Advance</Text>
          </TouchableOpacity>

      </View>

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
    color:'#464545'
  }
})

export default DumbEntStageM


