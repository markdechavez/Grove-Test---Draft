import * as React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Create({ navigation }) {
    return (
        <ImageBackground
            source={require('../assets/JungleBg.gif')}
            style={styles.CreateContainer}>
            
            <Text style={styles.letsGetInto1}>Let’s get into the (wood) work!</Text>

            <View style={styles.titlecontainer}>
                <Text style={styles.modalTitle}>Title</Text>
                <TextInput
                    style={styles.modalInput}
                    placeholder="Enter title"
                />
            </View>

            <View style={styles.titlecontainer}>
                <Text style={styles.modalTitle}>Subject Name</Text>
                <TextInput
                    style={styles.modalInput}
                    placeholder="Enter subject name"
                />
            </View>

            <View style={styles.titlecontainer}>
                <Text style={styles.modalTitle}>Subject Code</Text>
                <TextInput
                    style={styles.modalInput}
                    placeholder="Enter subject code"
                />
            </View>

            <View style={styles.titlecontainer}>
                <Text style={styles.modalTitle}>Specialization</Text>
                <TextInput
                    style={styles.modalInput}
                    placeholder="Choose Specialization"
                />
            </View>

        </ImageBackground>
        );
};

const styles = StyleSheet.create({
    CreateContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      resizeMode: 'cover'
    },
    letsGetInto1: {
        top: 20,
        alignSelf: 'center',
        fontSize: 15,
        letterSpacing: 1.6,
        fontWeight: "700",
        color: "#fff",
        textAlign: "center",
        height: 33

    },
    titlecontainer:{
        top: 20,
        padding:10
    },
    modalTitle:{
        fontSize: 20,
        color: '#ECE3CE',
        paddingBottom: 5
    },
    modalInput: {
        height: '50',
        borderStyle: "solid",
        borderColor: "#ece3ce",
        borderRadius: 5,
        borderWidth: 1,
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5 
    },
})