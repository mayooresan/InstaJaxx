import React from 'react'
import {Text, SafeAreaView, View, Image, TouchableOpacity} from 'react-native'
import Header from '../../src/components/Header'
import ImageComponent from '../../src/components/ImageComponent'

const HomeScreen = (): any => {
    return (
        <View style={{flex:1}}>
            <Header/>
            <ImageComponent/>    
        </View>
    )
}

export default HomeScreen
