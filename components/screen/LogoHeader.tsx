import React from 'react'
import { Image } from "expo-image"
import { StyleSheet } from 'react-native'

export const LogoHeader = (props: { top: number }) => {
    return (
        <Image
            style={styles(props.top).logo}
            source={require("../../assets/images/logo.png")}
            contentFit="cover"
            transition={100}
        />
    )
}

const styles = (top:number) => StyleSheet.create({
    logo: {
        width: "50%",
        height: 85,
        position: "absolute",
        top,
        alignSelf: "center",
        zIndex: 100
    }
})
