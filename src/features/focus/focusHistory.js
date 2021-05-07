import React, { Fragment } from 'react';
import {View, StyleSheet, FlatList, Text, SafeAreaView} from 'react-native'
import {fontSizes, spacing} from '../../utils/sizes'
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({item, index}) =>{
    return(<Text style={styles.historyItem(item.status)}>
            {item.subject}
        </Text>)
}

export const FocusHistory = ({focusHistory, setFocusHistory, onClear}) =>{
    const clearHistory = () =>{
        onClear()
    }
    return(
        <Fragment>
            <SafeAreaView style={{flex:0.5, alignItems:'center'}}>
            {!!focusHistory.length && (
                <Fragment>
                <Text style={styles.title}>Things we've focused on</Text>
                
                <FlatList
                    style={{flex:1}}
                    contentContainerStyle={{flex:1, alignItems: 'center'}}
                    data={focusHistory}
                    renderItem={HistoryItem}
                />
                
                <View style={styles.clearContainer}>
                <RoundedButton size={75} title="Clear" onPress={()=> onClear()}></RoundedButton>
            </View>
            </Fragment>
                )}
            </SafeAreaView>

        </Fragment>
    )
}

const styles = StyleSheet.create({
    historyItem: (status)=>({
        color: status > 1 ? 'red' : 'green',
        fontSize: fontSizes.md
    }),
    title:{
        color: 'white',
        fontSize: fontSizes.lg
    },
    clearContainer:{
        alignItems:'center',
        padding: spacing.md
    }
})