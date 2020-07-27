import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const ImageComponentHeader = (props: {profileImage: string, userName: String, location: String}) => {
    return (
        <View style={styles.container}>
                <TouchableOpacity style={{width:'10%'}}>
                        <Image
                            source={{uri: props.profileImage}}
                            style={styles.profileImageStyle}
                        />
                </TouchableOpacity>

                <View style={styles.userContainer}>
                    <Text style={{fontWeight: 'bold'}}>{props.userName}</Text>
                    <Text>{props.location} </Text>
                </View>

                <TouchableOpacity style={{width:'10%'}}>
                    <Image
                        source={require('../../src/assets/images/three-dots.png')}
                        style={styles.moreButtonStyle}
                    />
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:60, 
        marginLeft:16, 
        marginRight:16, 
        alignItems:'center', 
        flexDirection:'row'
    }, profileImageStyle: {
        width:40, 
        height:40, 
        borderRadius:20
    }, userContainer: {
        justifyContent:'center', 
        marginLeft:16, 
        width:'80%'
    }, moreButtonStyle: {
        height:16, 
        width:16, 
        resizeMode: 'contain'
    }
  });

export default ImageComponentHeader
