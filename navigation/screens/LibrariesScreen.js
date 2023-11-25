import * as React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LibrariesScreen({ navigation }) {
    return (
        <ImageBackground source={require('../assets/JungleBg.gif')} style={styles.backgroundImage}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => handleCreatedButtonPress()}>
                            <Text style={styles.buttonText}>Created</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => handleFavoriteButtonPress()}>
                            <Text style={styles.buttonText}>Favorite</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover', // or 'stretch' or 'contain'
        justifyContent: 'center',
    },
    scrollContainer:{
        flexGrow: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Set the background color to transparent
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10, 
    },
    button: {
        backgroundColor: '#2978A0',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        margin: 14,
        marginHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
