
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity,Image,ScrollView,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme/bgcol'


const SignUpScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: themeColors.bg}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={themeColors.bg} />
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <TouchableOpacity style={styles.arrow} onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/icons/backArrow.png')}
              style={styles.arrowA}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../assets/icons/signUpGym.png')}
            style={styles.png}
          />
        </View>
      </SafeAreaView>

      <View style={styles.login}>
        <ScrollView style={styles.form}>
          <Text style={styles.formtxt}>Full Name</Text>
          <TextInput
            placeholder="Enter Name"
            value={'Onkar Meher'}
            style={styles.formInp}
          />

          <Text style={styles.formtxt}>Email Address</Text>
          <TextInput
            placeholder="Enter Email"
            value={'onkarmeher265@gmail.com'}
            style={styles.formInp}
          />

          <Text style={styles.formtxt}>Password</Text>
          <TextInput
            placeholder="Enter Password"
            secureTextEntry
            value={'123456789'}
            style={styles.formInp}
          />

          <TouchableOpacity style={styles.loginBtn}>
            <Text
              style={{
                color: '#464545',
                fontSize: 15,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#464545',
              textAlign: 'center',
              marginTop: 10,
            }}>
            or
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 8,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#E1DFDF',
                borderRadius: 10,
                margin: 20,
              }}>
              <Image source={require('../assets/icons/google.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#E1DFDF',
                borderRadius: 10,
                margin: 20,
              }}>
              <Image source={require('../assets/icons/apple.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#E1DFDF',
                borderRadius: 10,
                margin: 20,
              }}>
              <Image source={require('../assets/icons/facebook.png')} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
              marginBottom:20
            }}>
            <Text
              style={{color: '#464545', fontWeight: 'normal', fontSize: 15}}>
              Already have an account ? 
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{fontWeight: 'bold', color: '#FED656', fontSize: 15}}>
                {'  '}
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
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
    png: {
      height:140,
      width:170,
    },
    login:{
      flex:2,
      backgroundColor:'white',
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      paddingTop:5,
    },
    form:{
      paddingHorizontal:25,
    },
    formtxt:{
      color:'#464545',
      marginLeft:20,
      marginTop:10,
      fontSize:15,
    },
    formInp:{
      marginTop:5,
      color:'#464545',
      backgroundColor:'#E1DFDF',
      paddingLeft:20,
      borderRadius:20,
      fontSize:15,
    },
    loginBtn:{
      backgroundColor:'#FED656',
      padding:8,
      marginTop:10,
      borderRadius:15,
    }
  })
  

export default SignUpScreen

