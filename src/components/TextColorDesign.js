import React from "react";
import { Text, StyleSheet } from "react-native";


export default function TextColorDesign(props) {
    return (
        <>
            <Text style={styles.logo}>Design</Text>
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        color: "#fff",
        fontSize:28,
        fontWeight:"bold"
    }
})