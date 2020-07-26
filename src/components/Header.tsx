import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const Header = () => {
    return (
        <View style={{ backgroundColor:'#FAFAFA'}}>
        <View style={{height:32}}/>
        <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row', height:64}}>
            <TouchableOpacity style={{width:'15%', justifyContent:'center', alignItems:'center'}}>
                    <Image
                        source={require('../../src/assets/images/camera.png')}
                        style={{width:48, height:24, resizeMode: 'contain'}}
                    />
            </TouchableOpacity>
            <View style={{width:'70%', justifyContent:'center', alignItems:'center'}}>
                    <Image
                        source={require('../../src/assets/images/instagram.png')}
                        style={{width:200, height:32, resizeMode: 'contain'}}
                    />
            </View>
            <TouchableOpacity style={{width:'15%', justifyContent:'center', alignItems:'center'}}>
                    <Image
                        source={require('../../src/assets/images/messages.png')}
                        style={{width:48, height:24, resizeMode: 'contain'}}
                    />
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default Header
