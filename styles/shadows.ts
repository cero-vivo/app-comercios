import { StyleSheet } from "react-native";
import { colors, ColorTypes } from "./colors";

export const shadowStyle = (shadowColor: ColorTypes) => StyleSheet.create({
    medium:{
        shadowColor: colors[shadowColor],
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 10.84,
        elevation: 5,
    },
    small:{
        shadowColor: colors[shadowColor],
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 1.84,
        elevation: 5,
    }
})