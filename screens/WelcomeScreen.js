import { View, Text, StatusBar, Image,StyleSheet,TouchableOpacity, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme/bgcol'
import { useNavigation } from '@react-navigation/native'


const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: themeColors.bg, flex:1}}>
       <StatusBar backgroundColor={themeColors.bg} />
       <View style={{flex: 1,justifyContent: 'space-around',marginHorizontal: 'auto',marginTop:50}} >
          <Text style={styles.font}>Let's Get Started!</Text>
          <View>
            <Image source={require('../assets/icons/pngegg.png')} style={styles.png} />
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.btn} >
                <Text style={styles.btntxt} >Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center',marginTop:-80}}>
            <Text style={{color: 'white', fontWeight: 'normal', fontSize: 20}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{fontWeight: 'bold', color: '#FED656', fontSize: 20}}>{' '}Log In</Text>
            </TouchableOpacity>
            
          </View>

       </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    font: {
      color: 'white',
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    png: {
      height: 180,
      width: 270,
      justifyContent: 'center',
      marginLeft: 50,
    },
    btn: {
      backgroundColor: '#FED656',
      marginHorizontal: 12,
      borderRadius: 8,
      paddingVertical: 8,
    //   marginVertical: 20,
    },
    btntxt: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
    },
  });

export default WelcomeScreen