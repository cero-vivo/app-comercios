
import { HttpResponse } from "@/http/Response"
import { OnBoardingSlice } from "../model/entities"

export interface OnBoardingActionsResolver {
    getOnBoardingDataSuccess: (res: HttpResponse<OnBoardingSlice[]>) => void
    getOnBoardingDataError: (error: any) =>void
}