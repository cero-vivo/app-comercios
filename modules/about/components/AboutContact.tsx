import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '@/styles/colors'
import { textTheme } from '@/styles/texts'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

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
	return (
		<View style={styles.container}>
			<View style={styles.titleBox}>
				<FontAwesome6 name="phone-volume" size={18} color={colors.secondary} />
				<Text style={styles.title}>
					Contacto
				</Text>
			</View>
			{contact.phone && <TouchableOpacity><Text style={styles.contactText}>{contact.phone}</Text></TouchableOpacity>}
			{contact.email && <TouchableOpacity><Text style={styles.contactText}>{contact.email}</Text></TouchableOpacity>}

			<View style={styles.socialMediaBox}>
				{contact.instagram && (
					<TouchableOpacity style={styles.singleSocialBox}>
						<Entypo name="instagram-with-circle" size={24} color={colors.secondary} />
						<Text style={styles.contactText}>{contact.instagram}</Text>
					</TouchableOpacity>
				)}
				{contact.tiktok && (
					<TouchableOpacity style={styles.singleSocialBox}>
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
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	textBox: {
		flexDirection: 'row',
		justifyContent: "space-between",
		width: "100%"
	},
	titleBox: {
		flexDirection: 'row',
		width: "100%",
		gap: 5,
	},
	title: {
		...textTheme.title,
		color: colors.secondary,
	},
	day: {
		...textTheme.subtitle,
		color: colors.secondary,
	},
	contactText: {
		...textTheme.body,
		color: colors.secondary,
	},
	socialMediaBox: {
		width: "100%",
		justifyContent: "center",
		flexDirection: "row",
		gap: 10
	},
	singleSocialBox: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		rowGap: 5
	}
})
