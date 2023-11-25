import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';

//this file implements the look of the carousel^-^

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const carouselCardItem=({item, index}) =>{
    return(
        <View style={styles.container} key={index}>
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.header}>{item.author}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f0f8ff',
        width: ITEM_WIDTH,
        paddingBottom:10,
        shadowColor:"#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.56,
        elevation: 7,
    },
    header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
      }
})

export default carouselCardItem