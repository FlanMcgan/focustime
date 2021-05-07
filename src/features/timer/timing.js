import React, { Fragment } from 'react';
import {View, StyleSheet} from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({onChangeTime}) =>{
    return(
    <Fragment>
    <View style = {StyleSheet.timingButton}>
    <RoundedButton 
    title='1' 
    size={75}
    onPress={() => onChangeTime(1)}
    />
</View>
    <View style = {StyleSheet.timingButton}>
    <RoundedButton 
    title='5' 
    size={75}
    onPress={() => onChangeTime(5)}
    />
</View>
        <View style = {StyleSheet.timingButton}>
            <RoundedButton 
            title='10' 
            size={75}
            onPress={() => onChangeTime(10)}
            />
        </View>
        <View style = {StyleSheet.timingButton}>
            <RoundedButton 
            title='15' 
            size={75}
            onPress={() => onChangeTime(15)}
            />
        </View>
        <View style = {StyleSheet.timingButton}>
            <RoundedButton 
            title='20' 
            size={75}
            onPress={() => onChangeTime(20)}
            />
        </View>
    </Fragment>
    )
}
const styles = StyleSheet.create({
    timingButton:{
        flex:1,
        alignItems:'center',
    }
})