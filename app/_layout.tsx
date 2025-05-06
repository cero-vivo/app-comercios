import { useInitApp } from "@/modules/init/useInitApp";
import { useAppStore } from "@/store/app-store";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";
import { BracnhSelectorModal } from "@/components/modals/BranchSelector/BranchSelectorModal";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const { checkOnBoardingState } = useInitApp()

	const [appIsReady, setAppIsReady] = useState(false);
	const showOnboarding = useAppStore(state => state.showOnboarding)
	const router = useRouter();

	useEffect(() => {
		async function prepare() {
			try {
				await checkOnBoardingState()
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	useEffect(() => {
		if (appIsReady && showOnboarding !== undefined) {
			if (showOnboarding) {
				router.replace("/onboarding");
			} else {
				router.replace("/(tabs)");
			}
		}
	}, [appIsReady, showOnboarding]);

	const onLayoutRootView = useCallback(() => {
		if (appIsReady) {
			SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady || showOnboarding === undefined) {
		return null;
	}

	return appIsReady && (
		<View onLayout={onLayoutRootView} style={{ flexGrow: 1 }}>
			<Stack>
				<Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
			<StatusBar style="dark" />
			<BracnhSelectorModal />
		</View>
	);
}
