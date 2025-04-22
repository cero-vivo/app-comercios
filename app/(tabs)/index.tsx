import { Screen } from '@/components/screen/Screen'
import { FeedPost } from '@/modules/engagement-channel/components/FeedPost/FeedPost'
import { useEngagementChannel } from '@/modules/engagement-channel/hooks/useEngagementChannel'
import React, { useEffect } from 'react'
import { FlatList, Text } from 'react-native'

export default function EngagementChannel() {

	const { getPosts, posts } = useEngagementChannel()
	
	useEffect(() => getPosts(), [])

	return (
		<Screen showLogoHeader>
			<FlatList 
				data={posts}
				renderItem={({item}) => <FeedPost post={item} />}
				keyExtractor={(item) => item?.id}
				contentContainerStyle={{rowGap: 14, padding: 10}}
			/>
		</Screen>
	)
}
