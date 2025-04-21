import { colors } from '@/styles/colors'
import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { LogoHeader } from './LogoHeader'

const topHeader = 60

export const Screen = (props: { children: React.ReactNode, showLogoHeader: boolean }) => {
	return (
		<SafeAreaView style={{ backgroundColor: colors.background, flexGrow: 1 }}>
			{props.showLogoHeader && <LogoHeader top={topHeader}/>}
			<ScrollView 
				contentContainerStyle={{ 
					paddingTop: props.showLogoHeader ? topHeader * 2 : 0,
					paddingLeft: "5%"
				}}
			>
				{props.children}
			</ScrollView>
		</SafeAreaView>
	)
}
