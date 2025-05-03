import { colors } from '@/styles/colors'
import React, { FC } from 'react'
import { Platform, SafeAreaView, ScrollView, View, ViewStyle } from 'react-native'
import { LogoHeader } from './LogoHeader'
import { SnackOpenClose } from '../SnackOpenClose/SnackOpenClose'

interface Props {
	children: React.ReactNode
	showLogoHeader?: boolean
	showOpenCloseIndicator?: boolean
	disabledScroll?: boolean
	style?: ViewStyle
}

export const topHeader = 60 * (Platform.OS === "android" ? 2.5 : 1.5)
export const Screen: FC<Props> = (props) => {

	
	return (
		<SafeAreaView style={{ backgroundColor: colors.background, flexGrow: 1, position: "relative" }}>
			{props.showLogoHeader && <LogoHeader top={60} />}
			{props.showOpenCloseIndicator && <SnackOpenClose style={{ zIndex: 100, width: "100%"}} />}
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
