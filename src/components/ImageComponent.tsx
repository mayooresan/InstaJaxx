import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import ImageComponentHeader from './ImageComponentHeader'
import ImageComponentFooter from './ImageComponentFooter'

interface ImageData {
    title: String;
    Uri: string;
    likes: Number;
    profileImage: string;
    userName: String;
    location: String;
}

const ImageComponent = (props: ImageData): any => {
    return (
        <View style={{marginTop:32}}>
            <ImageComponentHeader 
                profileImage={props.profileImage} 
                userName={props.userName}
                location={props.location}
            />
            <Image source={{uri: props.Uri}} 
                style={{ resizeMode: 'cover', width: '100%', height:300 }}
            />
            <ImageComponentFooter title={props.title} likes={props.likes} userName={props.userName}/>
        </View>
    )
}

export default ImageComponent
