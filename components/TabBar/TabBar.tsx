import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Entypo from "@expo/vector-icons/Entypo";
import Foundation from "@expo/vector-icons/Foundation";
import { colors } from "@/styles/colors";
import { shadowStyle } from "@/styles/shadows";

export const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {

    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: "center" }}
                        key={route.key}
                    >
                        {route.name === "index" && <Entypo name={"newsletter"} size={40} color={isFocused ? colors.primary : colors.tertiary} />}
                        {route.name === "About" && <Foundation name={"info"} size={40} color={isFocused ? colors.primary : colors.tertiary} />}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: Platform.OS === "android" ? "3%" : "6%",
        width: "50%",
        alignSelf:"center",
        backgroundColor: colors.white,
        borderRadius: 120,
        height: 65,
        alignItems: "center",
        justifyContent: "space-between",
        ...shadowStyle("primary").medium
    }
})