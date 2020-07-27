import React from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'

const ImageComponentFooter = (props: {title: String, likes: Number, userName: String}) => {
    return (
        <SafeAreaView style={styles.container}>
             <View style={styles.primaryContainer}>
                 <View style={styles.buttonGroupContainer}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../src/assets/images/heart.png')}
                                style={styles.imageButtonStyle}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Image
                                source={require('../../src/assets/images/comment.png')}
                                style={styles.imageButtonStyle}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Image
                                source={require('../../src/assets/images/messages.png')}
                                style={styles.imageButtonStyle}
                            />
                        </TouchableOpacity>
                        
                 </View>
                 <TouchableOpacity>
                    <Image
                            source={require('../../src/assets/images/bookmark.png')}
                            style={styles.imageButtonStyleBookMark}
                        />
                    </TouchableOpacity>
             </View>
            <Text style={styles.boldTextStyle}>{props.likes} Likes</Text>
            <View style={styles.titleStyle}>
                    <Text><Text style={styles.textStyle}>{props.userName}</Text> {props.title} </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:16
    }, primaryContainer: {
        flexDirection:'row'
    }, buttonGroupContainer: {
        flexDirection:'row', 
        width:'90%'
    }, imageButtonStyle: {
        width:30, 
        height:30, 
        marginLeft:16, 
        resizeMode: 'contain'
    }, imageButtonStyleBookMark: {
        width:30, 
        height:30, 
        marginRight:16, 
        resizeMode: 'contain'
    }, boldTextStyle: {
        margin:16, 
        fontWeight: 'bold'
    }, titleStyle: {
        flexDirection:'row', 
        alignItems:'center', 
        paddingLeft:16, 
        paddingRight:16
    }, textStyle: {
        fontWeight: 'bold'
    }
  });

export default React.memo(ImageComponentFooter)
