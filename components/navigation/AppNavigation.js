import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../../screens/HomeScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import SignUpScreen from '../../screens/SignUpScreen';

import ExerTypeM from '../../MainEntry/Male/ExerTypeM';
import ExerTypeF from '../../MainEntry/Female/ExerTypeF';

import GymEntStageM from '../../MainEntry/Male/WithGym/GymEntStageM';
import DumbEntStageM from '../../MainEntry/Male/WithDub/DumbEntStageM';
import NoEquipEntStageM from '../../MainEntry/Male/WithoutEquip/NoEquipEntStageM';

import GymEntStageF from '../../MainEntry/Female/WithGym/GymEntStageF';
import DumbEntStageF from '../../MainEntry/Female/WithDub/DumbEntStageF';
import NoEquipEntStageF from '../../MainEntry/Female/WithoutEquip/NoEquipEntStageF';

import MGBegineerDays from '../../MainEntry/Male/WithGym/MGBegineer/MGBegineerDays';
import MGIntermediateDays from '../../MainEntry/Male/WithGym/MGIntermediate/MGIntermediateDays';
import MGAdvanceDays from '../../MainEntry/Male/WithGym/MGAdvance/MGAdvanceDays';
import MDBegineerDays from '../../MainEntry/Male/WithDub/MDBegineer/MDBegineerDays';
import MDIntermediateDays from '../../MainEntry/Male/WithDub/MDIntermediate/MDIntermediateDays';
import MDAdvanceDays from '../../MainEntry/Male/WithDub/MDAdvance/MDAdvanceDays';
import MNEAdvanceDays from '../../MainEntry/Male/WithoutEquip/MNEAdvance/MNEAdvanceDays';
import MNEBeginnerDays from '../../MainEntry/Male/WithoutEquip/MNEBeginner/MNEBeginnerDays';
import MNEIntermediateDays from '../../MainEntry/Male/WithoutEquip/MNEIntermediate/MNEIntermediateDays';

import FGBegineerDays from '../../MainEntry/Female/WithGym/FGBegineer/FGBegineerDays';
import FGIntermediateDays from '../../MainEntry/Female/WithGym/FGIntermediate/FGIntermediateDays';
import FGAdvanceDays from '../../MainEntry/Female/WithGym/FGAdvance/FGAdvanceDays';
import FDBegineerDays from '../../MainEntry/Female/WithDub/FDBegineer/FDBegineerDays';
import FDIntermediateDays from '../../MainEntry/Female/WithDub/FDIntermediate/FDIntermediateDays';
import FDAdvanceDays from '../../MainEntry/Female/WithDub/FDAdvance/FDAdvanceDays';
import FNEBegineerDays from '../../MainEntry/Female/WithoutEquip/FNEBegineer/FNEBegineerDays';
import FNEIntermediateDays from '../../MainEntry/Female/WithoutEquip/FNEIntermediate/FNEIntermediateDays';
import FNEAdvanceDays from '../../MainEntry/Female/WithoutEquip/FNEAdvance/FNEAdvanceDays';

import MGBSundayExe from '../../MainEntry/Male/WithGym/MGBegineer/MGBSunday/MGBSundayExe';
import MGBSunBS from '../../MainEntry/Male/WithGym/MGBegineer/MGBSunday/MGBSunExe/MGBSunBS';
import MGBSunLP from '../../MainEntry/Male/WithGym/MGBegineer/MGBSunday/MGBSunExe/MGBSunLP';
import MGBSunDBP from '../../MainEntry/Male/WithGym/MGBegineer/MGBSunday/MGBSunExe/MGBSunDBP';
import MGBSunSLP from '../../MainEntry/Male/WithGym/MGBegineer/MGBSunday/MGBSunExe/MGBSunSLP';
import MGBSunDR from '../../MainEntry/Male/WithGym/MGBegineer/MGBSunday/MGBSunExe/MGBSunDR';
import MGBSunMach from '../../MainEntry/Male/WithGym/MGBegineer/MGBSunday/MGBSunExe/MGBSunMach';
import MGBSunCFP from '../../MainEntry/Male/WithGym/MGBegineer/MGBSunday/MGBSunExe/MGBSunCFP';
import MGBSunLE from '../../MainEntry/Male/WithGym/MGBegineer/MGBSunday/MGBSunExe/MGBSunLE';
import MGBSunPlank from '../../MainEntry/Male/WithGym/MGBegineer/MGBSunday/MGBSunExe/MGBSunPlank';
import MGBSunCool from '../../MainEntry/Male/WithGym/MGBegineer/MGBSunday/MGBSunExe/MGBSunCool';

import MGISunBBS from '../../MainEntry/Male/WithGym/MGIntermediate/MGISunday/MGISunExe/MGISunBBS';
import MGISundayExe from '../../MainEntry/Male/WithGym/MGIntermediate/MGISunday/MGISundayExe';
import MGISunAPU from '../../MainEntry/Male/WithGym/MGIntermediate/MGISunday/MGISunExe/MGISunAPU';
import MGISunBBP from '../../MainEntry/Male/WithGym/MGIntermediate/MGISunday/MGISunExe/MGISunBBP';
import MGISunD from '../../MainEntry/Male/WithGym/MGIntermediate/MGISunday/MGISunExe/MGISunD';
import MGISunDR from '../../MainEntry/Male/WithGym/MGIntermediate/MGISunday/MGISunExe/MGISunDR';
import MGISunIDP from '../../MainEntry/Male/WithGym/MGIntermediate/MGISunday/MGISunExe/MGISunIDP';
import MGISunBBOR from '../../MainEntry/Male/WithGym/MGIntermediate/MGISunday/MGISunExe/MGISunBBOR';
import MGISunLP from '../../MainEntry/Male/WithGym/MGIntermediate/MGISunday/MGISunExe/MGISunLP';
import MGISunHLR from '../../MainEntry/Male/WithGym/MGIntermediate/MGISunday/MGISunExe/MGISunHLR';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
            <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
            <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
            <Stack.Screen name="Home" options={{headerShown: true,headerStyle:{backgroundColor:'#FED656'}}} component={HomeScreen} />

            <Stack.Screen name="Exercise male type" options={{headerShown:false}} component={ExerTypeM} />
            <Stack.Screen name="Exercise female type" options={{headerShown:false}} component={ExerTypeF} />

            <Stack.Screen name="Male with gym" options={{headerShown:false}} component={GymEntStageM} />
            <Stack.Screen name="Male with dumbles" options={{headerShown:false}} component={DumbEntStageM} />
            <Stack.Screen name="Male without equipments" options={{headerShown:false}} component={NoEquipEntStageM} />

            <Stack.Screen name="Female with gym" options={{headerShown:false}} component={GymEntStageF} />
            <Stack.Screen name="Female with dumbles" options={{headerShown:false}} component={DumbEntStageF} />
            <Stack.Screen name="Female without equipments" options={{headerShown:false}} component={NoEquipEntStageF} />


            
            <Stack.Screen name="Male gym begg days" options={{headerShown:false}} component={MGBegineerDays} />
            <Stack.Screen name="Male gym interme days" options={{headerShown:false}} component={MGIntermediateDays} />
            <Stack.Screen name="Male gym advance days" options={{headerShown:false}} component={MGAdvanceDays} />

            <Stack.Screen name="Male dumb begg days" options={{headerShown:false}} component={MDBegineerDays} />
            <Stack.Screen name="Male dumb interme days" options={{headerShown:false}} component={MDIntermediateDays} />
            <Stack.Screen name="Male dumb advance days" options={{headerShown:false}} component={MDAdvanceDays} />

            <Stack.Screen name="Male no equip begg days" options={{headerShown:false}} component={MNEBeginnerDays} />
            <Stack.Screen name="Male no equip interme days" options={{headerShown:false}} component={MNEIntermediateDays} />
            <Stack.Screen name="Male no equip adv days" options={{headerShown:false}} component={MNEAdvanceDays} />

            <Stack.Screen name="Female gym begg days" options={{headerShown:false}} component={FGBegineerDays} />
            <Stack.Screen name="Female gym interme days" options={{headerShown:false}} component={FGIntermediateDays} />
            <Stack.Screen name="Female gym advance days" options={{headerShown:false}} component={FGAdvanceDays} />

            <Stack.Screen name="Female dumb begg days" options={{headerShown:false}} component={FDBegineerDays} />
            <Stack.Screen name="Female dumb interme days" options={{headerShown:false}} component={FDIntermediateDays} />
            <Stack.Screen name="Female dumb advance days" options={{headerShown:false}} component={FDAdvanceDays} />

            <Stack.Screen name="Female no equip begg days" options={{headerShown:false}} component={FNEBegineerDays} />
            <Stack.Screen name="Female no equip interme days" options={{headerShown:false}} component={FNEIntermediateDays} />
            <Stack.Screen name="Female no equip adv days" options={{headerShown:false}} component={FNEAdvanceDays} />

            <Stack.Screen name='Male gym begg sun exe list' options={{headerShown:false}} component={MGBSundayExe} />

            <Stack.Screen name='Male gym begg sun BS' options={{headerShown:false}} component={MGBSunBS} />
            <Stack.Screen name='Male gym begg sun LP' options={{headerShown:false}} component={MGBSunLP} />
            <Stack.Screen name='Male gym begg sun DBP' options={{headerShown:false}} component={MGBSunDBP} />
            <Stack.Screen name='Male gym begg sun SLP' options={{headerShown:false}} component={MGBSunSLP} />
            <Stack.Screen name='Male gym begg sun DR' options={{headerShown:false}} component={MGBSunDR} />
            <Stack.Screen name='Male gym begg sun MCF' options={{headerShown:false}} component={MGBSunMach} />
            <Stack.Screen name='Male gym begg sun CFP' options={{headerShown:false}} component={MGBSunCFP} />
            <Stack.Screen name='Male gym begg sun LE' options={{headerShown:false}} component={MGBSunLE} />
            <Stack.Screen name='Male gym begg sun plank' options={{headerShown:false}} component={MGBSunPlank} />
            <Stack.Screen name='Male gym begg sun cool' options={{headerShown:false}} component={MGBSunCool} />

            <Stack.Screen name='Male gym inter sun exe list' options={{headerShown:false}} component={MGISundayExe} />

            <Stack.Screen name='Male gym inter sun BBS' options={{headerShown:false}} component={MGISunBBS} />
            <Stack.Screen name='Male gym inter sun APU' options={{headerShown:false}} component={MGISunAPU} />
            <Stack.Screen name='Male gym inter sun BBP' options={{headerShown:false}} component={MGISunBBP} />
            <Stack.Screen name='Male gym inter sun D' options={{headerShown:false}} component={MGISunD} />
            <Stack.Screen name='Male gym inter sun DR' options={{headerShown:false}} component={MGISunDR} />
            <Stack.Screen name='Male gym inter sun IDP' options={{headerShown:false}} component={MGISunIDP} />
            <Stack.Screen name='Male gym inter sun BBOR' options={{headerShown:false}} component={MGISunBBOR} />
            <Stack.Screen name='Male gym inter sun LP' options={{headerShown:false}} component={MGISunLP} />
            <Stack.Screen name='Male gym inter sun HRL' options={{headerShown:false}} component={MGISunHLR} />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

