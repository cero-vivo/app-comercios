import { Tabs } from 'expo-router'
import React from 'react'
import { TabBar } from '@/components/TabBar/TabBar';

export default function EngagementChannel() {
	return (
		<Tabs tabBar={(props) => <TabBar {...props} /> }>
			<Tabs.Screen name="index" options={{ headerShown: false, animation: "shift"}}/>
			<Tabs.Screen name="About" options={{ headerShown: false, animation: "shift" }} />
		</Tabs>
	)
}
