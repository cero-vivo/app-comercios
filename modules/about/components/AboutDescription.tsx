import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import { colors } from '@/styles/colors'
import Animated, { Layout } from 'react-native-reanimated'
import { textTheme } from '@/styles/texts'

type Props = {
	text: string
	maxChars?: number
}
export const AboutDescription: React.FC<Props> = ({ text, maxChars = 120 }) => {
	
	const [expanded, setExpanded] = useState(false)

	const shouldTruncate = text.length > maxChars
	const displayedText = expanded || !shouldTruncate
		? text
		: text.slice(0, maxChars) + '...'

	const toggleExpanded = () => setExpanded((prev) => !prev)

	return (
		<Animated.View layout={Layout.springify()} style={styles.container}>
			<Text style={styles.description}>
				{displayedText}
				{shouldTruncate && (
					<Text style={styles.toggle} onPress={toggleExpanded}>
						{expanded ? ' ver menos' : ' ver más'}
					</Text>
				)}
			</Text>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingTop: "6%",
	},
	description: {
		...textTheme.subtitle,
		color: colors.bodyText,
		lineHeight: 30,
		textAlign: 'left',
		width: "95%",
		alignSelf: 'center'
	},
	toggle: {
		color: colors.primary,
		fontWeight: '600',
	},
})
