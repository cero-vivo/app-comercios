import { useEngagementChannel } from '@/modules/engagement-channel/hooks/useEngagementChannel'
import React, { Suspense } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

export default function EngagementChannel() {

	const { getPosts, posts } = useEngagementChannel()

	return (
		<View>
			<Text>EngagementChannel</Text>
			<TouchableHighlight onPress={getPosts} style={{width: "50%", height: 40}}>
				<Text>Get posts</Text>
			</TouchableHighlight>
			<Suspense fallback={"Loading ... "}>
				<Text>{JSON.stringify(posts)}</Text>
			</Suspense>
		</View>
	)
}
