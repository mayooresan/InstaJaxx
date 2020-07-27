import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.fillerView}/>
            <View style={styles.innerView}>
                <TouchableOpacity style={styles.imageButtonOne}>
                        <Image
                            source={require('../../src/assets/images/camera.png')}
                            style={styles.actionButtonStyle}
                        />
                </TouchableOpacity>
                <View style={styles.imageButtonTwo}>
                        <Image
                            source={require('../../src/assets/images/instagram.png')}
                            style={styles.logoStyle}
                        />
                </View>
                <TouchableOpacity style={styles.imageButtonThree}>
                        <Image
                            source={require('../../src/assets/images/messages.png')}
                            style={styles.actionButtonStyle}
                        />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FAFAFA'
    }, fillerView: {
        height:32
    }, innerView: {
        justifyContent:'center', 
        alignItems:'center', 
        flexDirection:'row', 
        height:64
    }, imageButtonOne: {
        width:'15%', 
        justifyContent:'center', 
        alignItems:'center'
    }, imageButtonTwo: {
        width:'70%', 
        justifyContent:'center', 
        alignItems:'center'
    }, imageButtonThree: {
        width:'15%', 
        justifyContent:'center', 
        alignItems:'center'
    }, actionButtonStyle: {
        width:48, 
        height:24, 
        resizeMode: 'contain'
    }, logoStyle: {
        width:200, 
        height:32, 
        resizeMode: 'contain'
    }
});

export default Header
