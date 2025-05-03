import { usePaddings } from '@/components/screen/paddings'
import { Screen } from '@/components/screen/Screen'
import { AboutAddressAndMap } from '@/modules/about/components/AboutAdress&Map'
import { AboutContact } from '@/modules/about/components/AboutContact'
import { AboutDescription } from '@/modules/about/components/AboutDescription'
import { AboutImages } from '@/modules/about/components/AboutImages'
import { AboutOpeningHours } from '@/modules/about/components/AboutOpeningHours'
import { useAboutScreen } from '@/modules/about/hooks/useAboutScreen'
import React from 'react'
import { Platform } from 'react-native'

export default function About(){

	const { businessData } = useAboutScreen()
	const paddings = usePaddings()
	const paddingBottom = paddings.screenPaddingBottom + (Platform.OS === "android" ? 130 : 110)
	return (
		<Screen showLogoHeader showOpenCloseIndicator style={{ gap: "2%", paddingTop: paddings.screenLogoPaddingTop, paddingBottom: paddingBottom}}>
			<AboutDescription text={businessData?.description || ""} />
			<AboutImages images={businessData?.imagesUrl|| []} />
			<AboutOpeningHours openingHours={businessData?.openingHours || []} />
			<AboutContact contact={businessData?.contact || {}} />
			<AboutAddressAndMap address={businessData?.address || ""} coordinates={businessData?.coordinates || { lat: 0, lng: 0 }} />
		</Screen>
	)
}
