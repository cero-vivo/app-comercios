import React, { useState } from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import Animated, { BounceInUp, BounceOutUp, FadeIn, FadeInUp, FadeOut, FadeOutUp, Layout, LightSpeedInRight, LightSpeedOutRight, LinearTransition, SlideInDown, SlideOutDown, StretchInY, ZoomIn, ZoomInDown, ZoomInEasyUp, ZoomOut } from 'react-native-reanimated'
import { colors } from '@/styles/colors'
import { textTheme } from '@/styles/texts'

type Props = {
	text: string
	maxChars?: number
}

export const AboutDescription: React.FC<Props> = ({ text, maxChars = 120 }) => {
	const [expanded, setExpanded] = useState(false)

	const shouldTruncate = text.length > maxChars

	const firstPart = shouldTruncate ? `${text.slice(0, maxChars)}${!expanded ? "..." : ""}` : text
	const remainingPart = shouldTruncate ? text.slice(maxChars)?.trimStart() : ''

	const toggleExpanded = () => setExpanded(prev => !prev)

	return (
		<Animated.View style={styles.container}>
			<Text style={styles.description}>
				{firstPart}
			</Text>

			{expanded && !!remainingPart && (
				<Animated.Text
					entering={FadeInUp.duration(100)}
					exiting={FadeOutUp.duration(70)}
					style={styles.description}
				>
					{remainingPart}
				</Animated.Text>
			)}

			{shouldTruncate && (
				<Pressable onPress={toggleExpanded}>
					<Text style={styles.toggle}>
						{expanded ? 'ver menos' : 'ver más'}
					</Text>
				</Pressable>
			)}
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: '6%',
		width: '95%',
		alignSelf: 'center',
	},
	description: {
		...textTheme.subtitle,
		color: colors.secondary,
		lineHeight: 30,
		textAlign: 'left',
	},
	toggle: {
		...textTheme.title,
		color: colors.primary,
		fontWeight: '600',
		marginTop: 8,
	},
})
