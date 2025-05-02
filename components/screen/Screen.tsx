import { colors } from '@/styles/colors'
import React from 'react'
import { Platform, SafeAreaView, ScrollView, View, ViewStyle } from 'react-native'
import { LogoHeader } from './LogoHeader'

export const Screen = (props: { children: React.ReactNode, showLogoHeader: boolean, disabledScroll?: boolean, style?: ViewStyle }) => {

	const topHeader = 60 * (Platform.OS === "android" ? 2.5 : 1.5)
	return (
		<SafeAreaView style={{ backgroundColor: colors.background, flexGrow: 1 }}>
			{props.showLogoHeader && <LogoHeader top={60} />}
			{props.disabledScroll ?
				<View style={{
					paddingTop: props.showLogoHeader ? topHeader : 0,
					paddingHorizontal: "5%",
					...props?.style
				}}>
					{props.children}
				</View> :
				<ScrollView
					nestedScrollEnabled
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						paddingTop: props.showLogoHeader ? topHeader : 0,
						paddingHorizontal: "3%",
						...props?.style
					}}
				>
					{props.children}
				</ScrollView>
			}
		</SafeAreaView>
	)
}
