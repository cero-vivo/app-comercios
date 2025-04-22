import { colors } from '@/styles/colors'
import React, { FC } from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FeedPost as FeedPostType, translateFeedPostTag } from '../../domain/entities'
import { Image } from 'expo-image'
import { timeAgo, timeUntil } from '@/utils/date-utils'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const FeedPost: FC<{ post: FeedPostType }> = (props) => {

	const { post } = props

	const onOpenExternalLink = () => Linking.openURL(post?.redirectUrl ?? "")

	
	const isOnlyImage = post?.title == null && post?.description == null && post?.expiresAt == null
	if (isOnlyImage) {
		return (
			<TouchableOpacity onPress={onOpenExternalLink} disabled={post?.redirectUrl == null} style={styles.shadow}>
				{post.imageUrl && <Image source={post?.imageUrl} style={styles.image} />}
			</TouchableOpacity>
		)
	}

	return (
		<TouchableOpacity onPress={onOpenExternalLink} style={[styles.mainBox, styles.shadow]} disabled={post?.redirectUrl == null}>
			{post?.expiresAt && (
				<View style={styles.expirationBox}>
					<MaterialCommunityIcons name="timer-sand-complete" size={20} color={colors.secondary} />
					<Text style={styles.text}>{timeUntil(post.expiresAt)}</Text>
				</View>
			)}
			{post?.title && <Text style={styles.title}>{post.title}</Text>}
			{post.imageUrl && <Image source={post?.imageUrl} style={styles.image} />}
			{post?.description && <Text style={styles.description}>{post.description}</Text>}
			{(post?.createdAt || post.tags) && (
				<View style={styles.bottomRow}>
					{post?.createdAt && <Text style={styles.text}>{timeAgo(post.createdAt)}</Text>}
					{post?.tags && (
						<View style={styles.tagBox}>
							<Text style={styles.text}>{translateFeedPostTag(post.tags)}</Text>
						</View>
					)}
				</View>
			)}
		</TouchableOpacity>
	)
}
const styles = StyleSheet.create({
	mainBox: {
		padding: 14,
		borderRadius: 12,
		backgroundColor: colors.primary,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		rowGap: 14
	},
	shadow: {
		shadowColor: colors.primary,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.45,
		shadowRadius: 3.84,
		elevation: 5,
	},
	expirationBox: {
		flexDirection: "row",
		columnGap: 5,
		alignSelf: "flex-start",
		alignItems: "center"
	},
	image: {
		width: "100%",
		minHeight: 220,
		objectFit: "contain",
		borderRadius: 12
	},
	text: {
		color: colors.secondary,
		fontWeight: "600"
	},
	title: {
		width: "100%",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 18,
		color: colors.tertiary
	},
	description: {
		width: "100%",
		fontWeight: "500",
		fontSize: 14,
		color: colors.tertiary
	},
	bottomRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},
	tagBox: {
		padding: 5,
		borderRadius: 120,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.white
	}
})