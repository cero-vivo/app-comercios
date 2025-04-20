import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {

	const colorScheme = useColorScheme()

	{/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */ }
	return (
		<>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
			<StatusBar style="dark" />
		</>

	);
}