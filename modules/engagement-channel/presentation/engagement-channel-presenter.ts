import { EngagementChannelInfrastructure } from "../service/engagement-channel-infrastructure";
import { EngagementChannelResolverScreen } from "./resolvers-screens";



export const EngagementChannelPresenter = (screenHandler: EngagementChannelResolverScreen) => {

    const infrastructureAgent = EngagementChannelInfrastructure()

    return {
        getPost: async (size: number, page: number) => {
            try {
                const res = await infrastructureAgent.getPost(size, page)
                screenHandler.getPostSucess?.(res)
            } catch (err) {
                screenHandler.getPostError?.(err)
            }
        }
    }
}