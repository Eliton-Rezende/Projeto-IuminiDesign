import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function ImageHome() {
    return (
        <View style={styles.imageHome}>
            <View>
                <Text style={styles.product} >Produtos</Text>
                <Image source={require('../assets/imageHome.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageHome: {
        marginTop: 20,
        alignItems: "center",
    },
    product: {
        position: "absolute",
        color: "#fff",
        zIndex: 1,
        fontWeight:"bold",
        marginTop:10,
        marginLeft:10
    }
})