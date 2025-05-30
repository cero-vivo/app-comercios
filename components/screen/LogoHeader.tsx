import React from 'react'
import { Image, ImageStyle } from "expo-image"
import { StyleSheet } from 'react-native'
import { shadowStyle } from '@/styles/shadows';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const LogoHeader = (props: { top: number, imageStyle?: ImageStyle }) => {
    
    return (
        <Image
            style={[styles(props.top).logo, props.imageStyle]}
            contentFit="contain"
            transition={100}
            placeholder={{ blurhash }}
            source={require("@/assets/images/logo-1.png")}
            cachePolicy="memory"
            priority={"high"}
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
        zIndex: 100,
        ...shadowStyle("primary").small
    }
})
