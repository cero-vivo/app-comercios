import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '@/styles/colors'
import { textTheme } from '@/styles/texts'
import AntDesign from '@expo/vector-icons/AntDesign';
import { OpeningHours } from '../model/entities';


type Props = {
	openingHours: OpeningHours[]
}

const mapDay = {
	"0": 'Lunes',
	"1": 'Martes',
	"2": 'Miercoles',
	"3": 'Jueves',
	"4": 'Viernes',
	"5": 'Sabado',
	"6": 'Domingo',
}

export const AboutOpeningHours: React.FC<Props> = ({ openingHours }) => {
	return (
		<View style={styles.container}>
			<View style={styles.titleBox}>
				<AntDesign name="clockcircle" size={18} color={colors.secondary} />
				<Text style={styles.title}>
					Horarios de atención
				</Text>
			</View>
			{openingHours.map((openingHour, index) => (
				<View key={openingHour?.day} style={styles.row}>
					<View style={styles.textBox}>
					<Text style={styles.day}>{mapDay[openingHour.day] || ""}</Text>
						<View>
							{openingHour?.shifts && openingHour?.shifts?.length > 1 ?
								openingHour?.shifts?.map((shift) => (
									<Text style={styles.hours} key={shift.from}>
										{shift.from} - {shift.to}
									</Text>
								)) :
								<Text style={styles.hours}>
									cerrado
								</Text>
							}
						</View>
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
		width: "100%",
	},
	titleBox: {
		flexDirection: 'row',
		width: "100%",
		gap: 5,
		alignItems: "center"
	},
	title: {
		...textTheme.title,
		color: colors.primary,
	},
	day: {
		...textTheme.subtitle,
		color: colors.secondary,
	},
	hours: {
		...textTheme.body,
		color: colors.secondary,
	},
})
