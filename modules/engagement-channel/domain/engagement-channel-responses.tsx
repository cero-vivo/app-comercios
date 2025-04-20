import { HttpResponse } from "@/http/Response"
import { Post } from "./entities"


//Get posts
export interface EngagementChannelGetPostsRes {
    res: HttpResponse<Post>
}