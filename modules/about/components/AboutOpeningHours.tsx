import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '@/styles/colors'
import { textTheme } from '@/styles/texts'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

type OpeningHour = {
	day: string
	from: string
	to: string
}

type Props = {
	openingHours: OpeningHour[]
}

export const AboutOpeningHours: React.FC<Props> = ({ openingHours }) => {
	return (
		<View style={styles.container}>
			{openingHours.map((openingHour, index) => (
				<View key={index} style={styles.row}>
					<MaterialCommunityIcons name="clock-outline" size={20} color={colors.primary} />
					<View style={styles.textBox}>
						<Text style={styles.day}>{openingHour.day}</Text>
						<Text style={styles.hours}>
							{openingHour.from} - {openingHour.to}
						</Text>
					</View>
				</View>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: 20,
		marginTop: 20,
		gap: 12,
		backgroundColor: colors.secondary,
		borderRadius: 12,
		paddingVertical: "5%"
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	textBox: {
		flexDirection: 'column',
	},
	day: {
		...textTheme.subtitle,
		color: colors.tertiary,
	},
	hours: {
		...textTheme.body,
		color: colors.bodyText,
	},
})
