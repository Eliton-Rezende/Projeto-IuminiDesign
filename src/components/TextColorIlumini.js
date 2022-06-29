import React from "react";
import { Text, StyleSheet } from "react-native";


export default function TextColorIlumini(props) {
    return (
        <>
            <Text style={styles.logo}>Ilumini</Text>
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        color:"#FF7A00",
        fontSize:28,
        fontWeight:"bold"

    }
})