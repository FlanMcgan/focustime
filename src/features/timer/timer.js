import React, {useState} from 'react'
import {View, StyleSheet, Text, Vibration, Platform} from 'react-native'
import {ProgressBar} from 'react-native-paper'

import { Countdown } from '../../components/Countdown'
import { colors } from '../../utils/colors'
import { spacing } from '../../utils/sizes'
import {RoundedButton} from '../../components/RoundedButton'
import { Timing } from './timing'
import { useKeepAwake } from 'expo-keep-awake'


const DEFAULT_TIME = 5

export const Timer = ({focusSubject, onTimerEnd, clearSubject}) => {
    useKeepAwake()
    const [minutes, setMinutes] = useState(DEFAULT_TIME)
    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    
    const onProgress = (progress) =>{
        setProgress(progress)
    }

const vibrate = () =>{
    if (Platform.OS === 'ios'){
    const interval = setInterval(()=>Vibration.vibrate(),1000)
    setTimeout(()=>clearInterval(interval), 10000)
    }else{
        Vibration.vibrate(10000)
    }
}

    const onEnd = () =>{
        vibrate()
        setMinutes(DEFAULT_TIME)
        setProgress(1)
        setIsStarted(false)
        onTimerEnd()

    }

    const changeTime = (min) =>{
        setMinutes(min)
        setProgress(1)
        setIsStarted(false)
    }
    return (
        <View style = {styles.container}>
            <View style={styles.countdown}>
                <Countdown minutes={minutes} onEnd={onEnd} isPaused={!isStarted} onProgress={onProgress}></Countdown>
            </View>
            <View style = {styles.textContainer}>
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            <View style={styles.progressBarWrapper}>
                <ProgressBar style={styles.progressBar} color='#5E84E2' progress={progress}/>
             </View>
            <View style={styles.buttonWrapper}>
                <Timing onChangeTime={changeTime}/>  
            </View>
            
            <View style = {styles.buttonWrapper}>
            {isStarted ? 
                <RoundedButton title="pause"  onPress={()=> setIsStarted(false)}/>

                :
                <RoundedButton title="start" onPress={()=> setIsStarted(true)}/>
            }

            </View>
            <View style={styles.clearSubject}>
            <RoundedButton title="-" size={50} onPress={()=> clearSubject()}/>
        </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        
    },
    countdown:{
        flex:0.5,
        alignItems:'center',
        justifyContent:'center',
    },
    textContainer:{
        paddingTop: spacing.xxl
    },
    title:{
        color:colors.white,
        textAlign:'center',
    },    
    task:{
        color:colors.white,
        textAlign:'center',
        fontWeight:'bold',
    },
    buttonWrapper:{
        flex: 0.3,
        flexDirection:'row',
        padding: 15,
        justifyContent:'center',
        alignItems:'center',
    },
    progressBarWrapper:{
        paddingTop: spacing.sm
    },
    progressBar:{
        height:10,
    },
    clearSubject:{
        paddingBottom:25,
        paddingLeft:25
    },
})