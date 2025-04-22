import { colors } from '@/styles/colors'
import React from 'react'
import { SafeAreaView, ScrollView, View, ViewStyle } from 'react-native'
import { LogoHeader } from './LogoHeader'

const topHeader = 60

export const Screen = (props: { children: React.ReactNode, showLogoHeader: boolean, disabledScroll?: boolean, style?: ViewStyle }) => {
	return (
		<SafeAreaView style={{ backgroundColor: colors.background }}>
			{props.showLogoHeader && <LogoHeader top={topHeader} />}

			{props.disabledScroll ?
				<View style={{
					paddingTop: props.showLogoHeader ? topHeader * 2 : 0,
					paddingHorizontal: "7%",
					...props?.style
				}}>
					{props.children}
				</View> :
				<ScrollView
					nestedScrollEnabled
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						paddingTop: props.showLogoHeader ? topHeader * 2 : 0,
						paddingHorizontal: "5%",
						...props?.style
					}}
				>
					{props.children}
				</ScrollView>
			}
		</SafeAreaView>
	)
}
