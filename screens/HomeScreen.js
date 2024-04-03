import { View, Text, StatusBar,TouchableOpacity,Image,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme/bgcol'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:themeColors.bg, flex:1}} >

      <StatusBar backgroundColor={themeColors.bh} />

      <View style={{alignItems:'center'}}  >
        <Image source={require('../assets/icons/malebgg.png')} style={styles.male} />
          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Exercise male type')}>
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Male</Text>
          </TouchableOpacity>
      </View>

      <View style={{alignItems:'center'}} >
        <Image source={require('../assets/icons/femalebg.png')} style={styles.female} />
          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Exercise female type')} >
            <Text style={{color:'#464545',fontSize:15, textAlign:'center',fontWeight:'bold'}}>Female</Text>
          </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  male:{
    height:110,
    width:140,
    marginTop:140,
  },
  female:{
    height:110,
    width:180,
    marginTop:140,
  },
  loginBtn:{
    backgroundColor:'#FED656',
    padding:8,
    paddingHorizontal:55,
    marginTop:10,
    borderRadius:15,
  }
})

export default HomeScreen
