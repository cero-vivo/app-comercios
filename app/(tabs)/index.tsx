import { Screen } from '@/components/screen/Screen'
import { useEngagementChannel } from '@/modules/engagement-channel/hooks/useEngagementChannel'
import React, { useEffect } from 'react'
import { Text } from 'react-native'

export default function EngagementChannel() {

	const { getPosts, posts } = useEngagementChannel()
	
	useEffect(() => getPosts(), [])

	return (
		<Screen showLogoHeader>
			<Text>EngagementChannel {JSON.stringify(posts)}</Text>
			
		</Screen>
	)
}
