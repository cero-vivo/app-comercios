import { Tabs } from 'expo-router'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

export default function EngagementChannel() {
	return (
		<Tabs>
			<Tabs.Screen name="index" 
				options={{ 
					title: "Canal de fidelización", 
				}}
			/>
			<Tabs.Screen name="About" options={{ title: "About" }} />
		</Tabs>
	)
}
