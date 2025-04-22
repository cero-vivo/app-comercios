import { colors } from '@/styles/colors'
import React, { FC } from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FeedPost as FeedPostType, translateFeedPostTag } from '../../model/entities'
import { Image } from 'expo-image'
import { timeAgo, timeUntil } from '@/utils/date-utils'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { textTheme } from '@/styles/texts'
import { shadowStyle } from '@/styles/shadows'
import { RFValue } from 'react-native-responsive-fontsize'

export const FeedPost: FC<{ post: FeedPostType }> = ({ post }) => {

	const onOpenExternalLink = () => Linking.openURL(post?.redirectUrl ?? "")

	const isOnlyImage = post?.title == null && post?.description == null && post?.expiresAt == null
	if (isOnlyImage) {
		return (
			<TouchableOpacity onPress={onOpenExternalLink} disabled={!post?.redirectUrl} style={[shadowStyle("primary").small, styles.mainPadding]}>
				{post.imageUrl && <Image source={post.imageUrl} style={styles.image} />}
			</TouchableOpacity>
		)
	}

	return (
		<TouchableOpacity onPress={onOpenExternalLink} style={[styles.mainBox, shadowStyle("primary").small, styles.mainPadding]} disabled={!post?.redirectUrl}>
			{post?.expiresAt && (
				<View style={styles.expirationBox}>
					<MaterialCommunityIcons name="timer-sand-complete" size={RFValue(16)} color={colors.primary} />
					<Text style={textTheme.timestamp}>{timeUntil(post.expiresAt)}</Text>
				</View>
			)}
			{post?.title && <Text style={[textTheme.title, { width: '100%' }]}>{post.title}</Text>}
			{post.imageUrl && <Image source={post.imageUrl} style={styles.image} />}
			{post?.description && <Text style={[textTheme.body, { width: '100%' }]}>{post.description}</Text>}
			{(post?.createdAt || post.tags) && (
				<View style={styles.bottomRow}>
					{post?.createdAt && <Text style={textTheme.timestamp}>{timeAgo(post.createdAt)}</Text>}
					{post?.tags && (
						<View style={styles.tagBox}>
							<Text style={textTheme.tag}>{translateFeedPostTag(post.tags)}</Text>
						</View>
					)}
				</View>
			)}
		</TouchableOpacity>
	)
}


const styles = StyleSheet.create({
	mainPadding: {
		marginVertical: "3%"
	},
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
	expirationBox: {
		flexDirection: "row",
		columnGap: 2,
		alignSelf: "flex-start",
		alignItems: "center"
	},
	image: {
		width: "100%",
		aspectRatio: 1,
		objectFit: "contain",
		borderRadius: 12
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
		backgroundColor: colors.primary
	},
})
