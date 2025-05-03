import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react";

export default function RootLayout() {

	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				//initialize application
			} catch (e) {
				console.warn(e);
			} finally {
				// Tell the application to render
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	return (
		<>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
			<StatusBar style="dark" />
		</>

	);
}