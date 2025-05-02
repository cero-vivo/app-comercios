import React, { useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { colors } from '@/styles/colors'
import { textTheme } from '@/styles/texts'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { shadowStyle } from '@/styles/shadows'
import open from 'react-native-open-maps';
import Entypo from '@expo/vector-icons/Entypo';

type Props = {
	address: string
	coordinates: {
		lat: number
		lng: number
	}
}

const ICON_WIDTH = 35

export const AboutAddressAndMap: React.FC<Props> = ({ address, coordinates }) => {

	const ref = useRef<MapView>(null)

	const goToAddress = () => open({
		provider: 'google',
		end: address,
		travelType: "drive",
		mapType: "transit"
	})

	const centerAdressOnMap = () => {
		ref?.current?.animateToRegion({
			latitude: coordinates.lat,
			longitude: coordinates.lng,
			latitudeDelta: 0.005,
			longitudeDelta: 0.005,
		})
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={goToAddress} style={styles.addressRow}>
				<MaterialCommunityIcons name="map-marker" size={22} color={colors.primary} />
				<Text style={styles.address}>{address}</Text>
			</TouchableOpacity>

			<MapView
				ref={ref}
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				initialRegion={{
					latitude: coordinates.lat,
					longitude: coordinates.lng,
					latitudeDelta: 0.005,
					longitudeDelta: 0.005,
				}}
				zoomControlEnabled
				showsUserLocation
				showsMyLocationButton
				showsPointsOfInterest
				tintColor={colors.primary}
				showsScale
				showsTraffic
				showsIndoors
			>
				<Marker
					coordinate={{ latitude: coordinates.lat, longitude: coordinates.lng }}
					title="Nombre Comercio"
					onPress={goToAddress}
					pinColor={colors.primary}
				/>
				{/* esquina superior izquerda */}
				<TouchableOpacity onPress={centerAdressOnMap}
					style={{
						position: "absolute",
						zIndex: 200000000,
						backgroundColor: colors.tertiary,
						borderRadius: 100,
						top: 10,
						left: 10,
						...shadowStyle("primary").small,
						width: ICON_WIDTH * 1.5,
						height: ICON_WIDTH * 1.5,
						justifyContent: "center",
						alignItems: "center"
					}}>
					<Entypo name="home" size={ICON_WIDTH} color={colors.primary} />
				</TouchableOpacity>

			</MapView>
			{/* Centrado y abajo */}
			{/* 	<TouchableOpacity onPress={centerAdressOnMap}
				style={{
					position: "absolute",
					bottom: -20,
					left: "50%",
					transform: [{
						translateX: (ICON_WIDTH / 3.5) * -1
					}],
					zIndex: 200000000,
					backgroundColor: colors.tertiary,
					borderRadius: 100,
					...shadowStyle("primary").small,
					width: ICON_WIDTH * 1.5,
					height: ICON_WIDTH * 1.5,
					justifyContent: "center",
					alignItems: "center"
				}}>
				<Entypo name="home" size={ICON_WIDTH} color={colors.primary} />
			</TouchableOpacity> */}
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
		padding: "5%",
		position: "relative"
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
