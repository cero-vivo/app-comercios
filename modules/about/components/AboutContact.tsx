import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Linking, Alert } from 'react-native'
import { colors } from '@/styles/colors'
import { textTheme } from '@/styles/texts'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

type Contact = {
	phone?: string
	email?: string
	instagram?: string
	tiktok?: string
}

type Props = {
	contact: Contact
}

export const AboutContact: React.FC<Props> = ({ contact }) => {
	const formatPhoneNumber = (phone: string) =>
		phone.replace(/[^0-9]/g, '') // elimina espacios, +, etc

	const openWhatsApp = (phone: string) => {
		const cleaned = formatPhoneNumber(phone)
		const url = `https://wa.me/${cleaned}`
		Linking.openURL(url).catch(() => Alert.alert('Error', 'No se pudo abrir WhatsApp.'))
	}

	const openEmail = (email: string) => {
		const url = `mailto:${email}`
		Linking.openURL(url).catch(() => Alert.alert('Error', 'No se pudo abrir la app de correo.'))
	}

	const getSocialUrl = (platform: 'instagram' | 'tiktok', handle: string) => {
		const cleanHandle = handle.replace('@', '')
		return platform === 'instagram'
			? `https://instagram.com/${cleanHandle}`
			: `https://www.tiktok.com/@${cleanHandle}`
	}

	return (
		<View style={styles.container}>
			<View style={styles.titleBox}>
				<FontAwesome6 name="phone-volume" size={18} color={colors.secondary} />
				<Text style={styles.title}>Contacto</Text>
			</View>

			{contact.phone && (
				<TouchableOpacity onPress={() => openWhatsApp(contact.phone)}>
					<Text style={styles.contactText}>{contact.phone}</Text>
				</TouchableOpacity>
			)}

			{contact.email && (
				<TouchableOpacity onPress={() => openEmail(contact.email)}>
					<Text style={styles.contactText}>{contact.email}</Text>
				</TouchableOpacity>
			)}

			<View style={styles.socialMediaBox}>
				{contact.instagram && (
					<TouchableOpacity
						style={styles.singleSocialBox}
						onPress={() => Linking.openURL(getSocialUrl('instagram', contact?.instagram || ""))}
					>
						<Entypo name="instagram-with-circle" size={24} color={colors.secondary} />
						<Text style={styles.contactText}>{contact.instagram}</Text>
					</TouchableOpacity>
				)}
				{contact.tiktok && (
					<TouchableOpacity
						style={styles.singleSocialBox}
						onPress={() => Linking.openURL(getSocialUrl('tiktok', contact?.tiktok || ""))}
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
		color: colors.secondary,
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
	}
})
