import { Screen } from '@/components/screen/Screen'
import { useEngagementChannel } from '@/modules/engagement-channel/hooks/useEngagementChannel'
import React from 'react'
import { Text } from 'react-native'

export default function EngagementChannel() {

	const { getPosts, posts } = useEngagementChannel()

	return (
		<Screen showLogoHeader>
			<Text>EngagementChannel</Text>
		</Screen>
	)
}
