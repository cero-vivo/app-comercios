import { colors } from '@/styles/colors'
import React, { FC } from 'react'
import { Platform, SafeAreaView, ScrollView, View, ViewStyle } from 'react-native'
import { LogoHeader } from './LogoHeader'
import { SnackOpenClose } from '../SnackOpenClose/SnackOpenClose'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useHomeHeaderUI } from './useHomeHeaderUI'
import { useFocusEffect } from '@react-navigation/native'

interface Props {
	children: React.ReactNode
	showLogoHeader?: boolean
	showOpenCloseIndicator?: boolean
	disabledScroll?: boolean
	style?: ViewStyle
}

export const Screen: FC<Props> = (props) => {
	
	const insets = useSafeAreaInsets();

	const topHeader = insets.top * (Platform.OS === "android" ? 2.5 : 1.5)

	const headerUI = useHomeHeaderUI();

	useFocusEffect(
		React.useCallback(() => {
		  return () => {
			headerUI.setBannerIsOpen(false);
		  };
		}, [])
	  );

	return (
		<SafeAreaView style={{ backgroundColor: colors.background, flexGrow: 1, position: "relative"}}>
			{props.showLogoHeader && <LogoHeader top={insets.top} />}
			{props.showOpenCloseIndicator && <SnackOpenClose bannerIsOpen={headerUI.bannerIsOpen} setBannerIsOpen={headerUI.setBannerIsOpen} style={{ zIndex: 100, width: "100%"}} />}
			{props.disabledScroll ?
				<View style={{
					paddingHorizontal: "5%",
					...props?.style
				}}>
					{props.children}
				</View> :
				<ScrollView
					nestedScrollEnabled
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
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
