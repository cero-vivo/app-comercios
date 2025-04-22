import { HttpResponse } from "@/http/Response";
import { Business } from "../model/entities";

export interface AboutActionsResolver {
    getBusinessDataSuccess: (res: HttpResponse<Business>) => void
    getBusinessDataError: (error: any) =>void
}