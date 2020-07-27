import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
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
        <View style={styles.container}>
            <ImageComponentHeader 
                profileImage={props.profileImage} 
                userName={props.userName}
                location={props.location}
            />
            <Image source={{uri: props.Uri}} 
                style={styles.imageStyle}
            />
            <ImageComponentFooter title={props.title} likes={props.likes} userName={props.userName}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:32
    }, imageStyle: { 
        resizeMode: 'cover', 
        width: '100%', 
        height:300 
    }
  });

export default ImageComponent
