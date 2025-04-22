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
							<Text style={styles.tag}>{translateFeedPostTag(post.tags)}</Text>
						</View>
					)}
				</View>
			)}
		</TouchableOpacity>
	)
}
const styles = StyleSheet.create({
	mainBox: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 12,
		backgroundColor: colors.white,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		rowGap: 8
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
		marginVertical: 7
	},
	expirationBox: {
		flexDirection: "row",
		columnGap: 5,
		alignSelf: "flex-start",
		alignItems: "center"
	},
	image: {
		width: "100%",
		aspectRatio: 1,
		objectFit: "contain",
		borderRadius: 12
	},
	text: {
		color: colors.primary,
		fontWeight: "600"
	},
	title: {
		width: "100%",
		fontWeight: "bold",
		fontSize: 18,
		color: colors.secondary
	},
	description: {
		width: "100%",
		fontWeight: "500",
		fontSize: 14,
		color: colors.secondary
	},
	bottomRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},
	tagBox: {
		paddingVertical: 5,
		paddingHorizontal: 8,
		borderRadius: 120,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#E7D4C0"
	},
	tag: {
		color: colors.secondary,
		fontWeight: "800"
	},
})