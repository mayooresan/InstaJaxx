import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const ImageComponentHeader = (props: {profileImage: string, userName: String, location: String}) => {
    return (
        <View style={{height:60, marginLeft:16, marginRight:16, alignItems:'center', flexDirection:'row'}}>
                <TouchableOpacity style={{width:'10%'}}>
                        <Image
                            source={{uri: props.profileImage}}
                            style={{width:40, height:40, borderRadius:20}}
                        />
                </TouchableOpacity>

                <View style={{justifyContent:'center', marginLeft:16, width:'80%'}}>
                    <Text style={{fontWeight: 'bold'}}>{props.userName}</Text>
                    <Text>{props.location} </Text>
                </View>

                <TouchableOpacity style={{width:'10%'}}>
                    <Image
                        source={require('../../src/assets/images/three-dots.png')}
                        style={{height:16, width:16, resizeMode: 'contain'}}
                    />
                </TouchableOpacity>
            </View>
    )
}

export default ImageComponentHeader
