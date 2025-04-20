import { EngagementChannelResolverScreen } from "../domain/resolvers-screens";
import { EngagementChannelInfrastructure } from "../infrastructure/engagement-channel-infrastructure";



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