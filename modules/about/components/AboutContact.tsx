import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Linking, Alert } from 'react-native'
import { colors } from '@/styles/colors'
import { textTheme } from '@/styles/texts'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Contact } from '../model/entities'
import { OverlayLoading } from '@/components/OverlayLoading/OverlayLoading'
import { RFValue } from 'react-native-responsive-fontsize'

type Props = {
	contact: Contact
}

const formatPhoneNumber = (phone: string) => phone.replace(/[^0-9]/g, '') // elimina espacios, +, etc
const getSocialUrl = (platform: 'instagram' | 'tiktok', handle: string) => {
	const cleanHandle = handle.replace('@', '')
	return platform === 'instagram'
		? `https://instagram.com/${cleanHandle}`
		: `https://www.tiktok.com/@${cleanHandle}`
}

export const AboutContact: React.FC<Props> = ({ contact }) => {

	const [openingLink, setOpeningLink] = React.useState<boolean>(false)
	const openLink = async (url: string, errMsg: string) => {
		try {
			setOpeningLink(true)
			await Linking.openURL(url)
			setOpeningLink(false)
		} catch (e) {
			Alert.alert('Error', errMsg)
			setOpeningLink(false)
		}

	}
	const openCall = () => openLink(`tel:${formatPhoneNumber(contact?.phone || '') || ''}`, 'No se pudo marcar el teléfono.')
	const openWhatsApp = () => openLink(`https://wa.me/${formatPhoneNumber(contact?.whatsapp || '') || ''}`, 'No se pudo abrir WhatsApp.')
	const openEmail = () => openLink(`mailto:${contact.email || ""}`, 'No se pudo abrir la app de correo.')
	const openInstagram = () => openLink(getSocialUrl('instagram', contact.instagram || ''), 'No se pudo abrir Instagram.')
	const openTiktok = () => openLink(getSocialUrl('tiktok', contact?.tiktok || ""), 'No se pudo abrir Tiktok.')
	const openWebsite = () => openLink(contact.website || "", 'No se pudo abrir el sitio web.')

	return (
		<View style={styles.container}>
			<OverlayLoading isLoading={openingLink} />
			<View style={styles.titleBox}>
				<FontAwesome6 name="phone-volume" size={18} color={colors.secondary} />
				<Text style={styles.title}>Contacto</Text>
			</View>

			{
				(contact.phone || contact.whatsapp) ?
					contact.phone === contact.whatsapp ?
						(
							<View style={styles.phoneBox}>
								<Text style={styles.contactText}>{contact.phone}</Text>
								<View style={styles.phoneIconsBox}>
									<TouchableOpacity onPress={openWhatsApp}>
										<FontAwesome name="whatsapp" size={RFValue(22)} color={colors.secondary} />
									</TouchableOpacity>
									<TouchableOpacity onPress={openCall}>
										<Entypo name="phone" size={RFValue(22)} color={colors.secondary} />
									</TouchableOpacity>
								</View>
							</View>
						) :
						(
							<View style={{gap: 5}}>
								{contact.phone && (
									<TouchableOpacity onPress={openCall} style={styles.phoneIndividualBox}>
										<Text style={styles.contactText}>{contact.phone}</Text>
										<Entypo name="phone" size={RFValue(22)} color={colors.secondary} />
									</TouchableOpacity>
								)}
								{contact.whatsapp && (
									<TouchableOpacity onPress={openWhatsApp} style={styles.phoneIndividualBox}>
										<Text style={styles.contactText}>{contact.whatsapp}</Text>
										<FontAwesome name="whatsapp" size={RFValue(22)} color={colors.secondary} />
									</TouchableOpacity>
								)}
							</View>
						) : null
			}

			{contact.email && (
				<TouchableOpacity onPress={openEmail}>
					<Text style={styles.contactText}>{contact.email}</Text>
				</TouchableOpacity>
			)}

			{contact.website && (
				<TouchableOpacity onPress={openWebsite}>
					<Text style={styles.contactText}>{contact.website}</Text>
				</TouchableOpacity>
			)}

			<View style={styles.socialMediaBox}>
				{contact.instagram && (
					<TouchableOpacity
						style={styles.singleSocialBox}
						onPress={openInstagram}
					>
						<Entypo name="instagram-with-circle" size={24} color={colors.secondary} />
						<Text style={styles.contactText}>{contact.instagram}</Text>
					</TouchableOpacity>
				)}
				{contact.tiktok && (
					<TouchableOpacity
						style={styles.singleSocialBox}
						onPress={openTiktok}
					>
						<FontAwesome5 name="tiktok" size={24} color={colors.secondary} />
						<Text style={styles.contactText}>{contact.tiktok}</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: 20,
		gap: 12,
		borderRadius: 12
	},
	titleBox: {
		flexDirection: 'row',
		width: '100%',
		gap: 5,
		alignItems: 'center'
	},
	title: {
		...textTheme.title,
		color: colors.primary,
	},
	contactText: {
		...textTheme.body,
		color: colors.secondary,
	},
	socialMediaBox: {
		width: '100%',
		justifyContent: 'center',
		flexDirection: 'row',
		gap: 10,
		marginTop: "1%"
	},
	singleSocialBox: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 5
	},
	phoneBox: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: "space-between",
	},
	phoneIconsBox: {
		flexDirection: "row",
		gap: 20,
	},
	phoneIndividualBox: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: "space-between",
	}
})
