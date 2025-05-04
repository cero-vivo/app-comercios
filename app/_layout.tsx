import { useInitApp } from "@/modules/init/useInitApp";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

export default function RootLayout() {
	const [appIsReady, setAppIsReady] = useState(false);
	const [displayOnboarding, setDisplayOnboarding] = useState(false);

	console.log("🚀 ~ RootLayout ~ displayOnboarding:", displayOnboarding);

	// Asegúrate de que el nombre sea correcto
	const { showOnboarding } = useInitApp();

	useEffect(() => {
		async function prepare() {
			try {
				// Aquí corriges el nombre de la función para coincidir con la exportada
				const showOnboardingResult = await showOnboarding();
				console.log("🚀 ~ prepare ~ showOnboardingResult:", showOnboardingResult)
				setDisplayOnboarding(showOnboardingResult);
			} catch (e) {
				console.warn(e);
			} finally {
				// Tell the application to render
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	return appIsReady && (
		<>
			<Stack>
				{displayOnboarding ?
					<Stack.Screen name="index" options={{ headerShown: false }} /> :
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				}
			</Stack>
			<StatusBar style="dark" />
		</>
	);
}
