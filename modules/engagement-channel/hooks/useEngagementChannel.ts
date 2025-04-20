import React, { useState } from 'react'
import { EngagementChannelPresenter } from '../presentation/engagement-channel-presenter'
import { EngagementChannelResolverScreen } from '../domain/resolvers-screens'
import { Post } from '../domain/entities'
import { HttpStates } from '@/http/HttpStates'

export const useEngagementChannel = () => {

	const [posts, setPosts] = useState<Post[]>([])
	const [getPostsState, setGetPostsState] = useState<HttpStates>("idle")

	const operationHandler: EngagementChannelResolverScreen = {
		getPostSucess: (response) => {
			setGetPostsState("success")
			setPosts(response.res.data)


			setGetPostsState("idle")
		},
		getPostError: (error) => {
			setGetPostsState("fail")
			console.log(error)
		}
	}

	const presenter = EngagementChannelPresenter(operationHandler)

	const getPosts = () => {
		setGetPostsState("loading")
		presenter.getPost(2, 2)
	}

	return {
		getPosts,
		posts,
		getPostsState
	}



}
