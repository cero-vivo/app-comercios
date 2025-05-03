import { Screen } from '@/components/screen/Screen'
import { FeedPost } from '@/modules/engagement-channel/components/FeedPost/FeedPost'
import { useEngagementChannel } from '@/modules/engagement-channel/hooks/useEngagementChannel'
import React, { useEffect } from 'react'
import { FlashList } from '@shopify/flash-list'
import { usePaddings } from '@/components/screen/paddings'

export default function EngagementChannel() {

	const { getPosts, posts } = useEngagementChannel()

	const paddings = usePaddings()
	
	useEffect(() => getPosts(), [])

	return (
		<Screen showLogoHeader showOpenCloseIndicator style={{paddingTop: paddings.screenLogoPaddingTop, paddingBottom: paddings.screenPaddingBottom}}>
			<FlashList 
				data={posts}
				renderItem={({item}) => <FeedPost post={item} />}
				keyExtractor={(item) => item?.id}
				contentContainerStyle={{paddingHorizontal: 10}}
				estimatedItemSize={172}
			/>
		</Screen>
	)
}
