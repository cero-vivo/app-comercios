import { Screen } from '@/components/screen/Screen'
import { FeedPost } from '@/modules/engagement-channel/components/FeedPost/FeedPost'
import { useEngagementChannel } from '@/modules/engagement-channel/hooks/useEngagementChannel'
import React, { useEffect } from 'react'
import { FlashList } from '@shopify/flash-list'

export default function EngagementChannel() {

	const { getPosts, posts } = useEngagementChannel()
	
	useEffect(() => getPosts(), [])

	return (
		<Screen showLogoHeader showOpenCloseIndicator>
			<FlashList 
				data={posts}
				renderItem={({item}) => <FeedPost post={item} />}
				keyExtractor={(item) => item?.id}
				contentContainerStyle={{paddingHorizontal: 10, paddingTop: 20}}
				estimatedItemSize={172}
			/>
		</Screen>
	)
}
