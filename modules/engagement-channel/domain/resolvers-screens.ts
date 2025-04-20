import { EngagementChannelGetPostsRes } from "./engagement-channel-responses";

export interface EngagementChannelResolverScreen {
    getPostSucess?: (response: EngagementChannelGetPostsRes) => void
    getPostError?: (error: any) => void
}