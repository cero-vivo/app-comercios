import { Screen } from '@/components/screen/Screen'
import { API_URL } from '@/config/config.enviroments'
import { AboutAddressAndMap } from '@/modules/about/components/AboutAdress&Map'
import { AboutContact } from '@/modules/about/components/AboutContact'
import { AboutDescription } from '@/modules/about/components/AboutDescription'
import { AboutImages } from '@/modules/about/components/AboutImages'
import { AboutOpeningHours } from '@/modules/about/components/AboutOpeningHours'
import { useAboutScreen } from '@/modules/about/hooks/useAboutScreen'
import React from 'react'

export default function About(){

	const { businessData } = useAboutScreen()

	const URL = API_URL
	console.log("🚀 ~ About ~ URL:", URL)
	
	return (
		<Screen showLogoHeader style={{paddingBottom: "55%", gap: "2%"}}>
			<AboutDescription text={businessData?.description || ""} />
			<AboutImages images={businessData?.imagesUrl|| []} />
			<AboutOpeningHours openingHours={businessData?.openingHours || []} />
			<AboutContact contact={businessData?.contact || {}} />
			<AboutAddressAndMap address={businessData?.address || ""} coordinates={businessData?.coordinates || { lat: 0, lng: 0 }} />
		</Screen>
	)
}
