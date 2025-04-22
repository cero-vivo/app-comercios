import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Entypo from "@expo/vector-icons/Entypo";
import Foundation from "@expo/vector-icons/Foundation";
import { colors } from "@/styles/colors";

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
                        {route.name === "index" && <Entypo name={"newsletter"} size={45} color={isFocused ? colors.secondary : colors.tertiary} />}
                        {route.name === "About" && <Foundation name={"info"} size={45} color={isFocused ? colors.secondary : colors.tertiary} />}
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
        bottom: 80,
        width: "60%",
        alignSelf:"center",
        backgroundColor: colors.white,
        borderRadius: 120,
        height: 70,
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: colors.secondary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
        elevation: 5,
    }
})