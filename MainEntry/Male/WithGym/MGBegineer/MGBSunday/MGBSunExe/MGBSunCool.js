import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../../../../../../theme/bgcol'
import { useNavigation } from '@react-navigation/native'

const MGBSunCool = () => {
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
        <Text style={styles.title}>Cool Down 5-7 minutes</Text>
      </View>

      <SafeAreaView style={{flexDirection: 'row', justifyContent: 'center',marginTop:15}}>
          <Image
            source={require('../../MGBAssets/coolM3.webp')}
            style={{height:130,width:200}}
          />
      </SafeAreaView>
      <SafeAreaView style={{flexDirection: 'row', justifyContent: 'center',marginTop:15}}>
          <Image
            source={require('../../MGBAssets/coolM5.jpg')}
            style={{height:130,width:250}}
          />
      </SafeAreaView>
      <SafeAreaView style={{flexDirection: 'row', justifyContent: 'center',marginTop:15}}>
          <Image
            source={require('../../MGBAssets/coolM4.png')}
            style={{height:130,width:250}}
          />
      </SafeAreaView>
      <SafeAreaView style={{flexDirection: 'row', justifyContent: 'center',marginTop:15}}>
          <Image
            source={require('../../MGBAssets/coolM1.gif')}
            style={{height:130,width:100}}
          />
      </SafeAreaView>

      <View style={{marginTop:20}}>
        <Text style={styles.header}>How To Perform - </Text>
        <Text style={styles.discrip}> 1 - Perform gentle stretches for each major muscle group, holding each stretch for 15-30 seconds.</Text>
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
    marginHorizontal:5,
    marginBottom:50
  },
  header:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'600',
    color:'#464545',
    marginHorizontal:5
  }
})

export default MGBSunCool


