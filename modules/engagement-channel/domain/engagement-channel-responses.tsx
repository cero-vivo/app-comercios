
import { HttpResponse } from "@/http/Response"
import { FeedPost } from "./entities"


//Get posts
export interface EngagementChannelGetPostsRes {
    res: HttpResponse<FeedPost>
}