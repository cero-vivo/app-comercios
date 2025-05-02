import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { colors } from '@/styles/colors'
import { textTheme } from '@/styles/texts'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { shadowStyle } from '@/styles/shadows'
import open, { createMapLink, createOpenLink } from 'react-native-open-maps';

type Props = {
	address: string
	coordinates: {
		lat: number
		lng: number
	}
}

export const AboutAddressAndMap: React.FC<Props> = ({ address, coordinates }) => {

	const goToAddress = () => open({ 
		provider: 'google', 
		end: address, 
		travelType: "drive",
		mapType: "transit"
	})

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={goToAddress} style={styles.addressRow}>
				<MaterialCommunityIcons name="map-marker" size={22} color={colors.primary} />
				<Text style={styles.address}>{address}</Text>
			</TouchableOpacity>

			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				initialRegion={{
					latitude: coordinates.lat,
					longitude: coordinates.lng,
					latitudeDelta: 0.005,
					longitudeDelta: 0.005,
				}}
				zoomControlEnabled
				scrollEnabled={false}
				zoomEnabled={false}
				pitchEnabled={false}
				rotateEnabled={false}
			>
				<Marker
					coordinate={{ latitude: coordinates.lat, longitude: coordinates.lng }}
					title="Nombre Comercio"
					onPress={goToAddress}
				/>
			</MapView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: 20,
		gap: 12,
		backgroundColor: colors.white,
		borderRadius: 12,
		...shadowStyle("primary").small,
		padding: "5%"
	},
	addressRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	address: {
		...textTheme.subtitle,
		color: colors.secondary,
		flex: 1,
	},
	map: {
		width: '100%',
		height: 263,
		borderRadius: 12,
		overflow: 'hidden',
	},
})
