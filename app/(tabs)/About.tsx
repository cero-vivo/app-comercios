import { Screen } from '@/components/screen/Screen'
import { useAboutScreen } from '@/modules/about/hooks/useAboutScreen'
import React from 'react'
import { Text } from 'react-native'

export default function About(){

	const { brandData } = useAboutScreen()
	
	return (
		<Screen showLogoHeader>
			<Text>{brandData?.name}</Text>
		</Screen>
	)
}
