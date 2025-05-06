import { HttpResponse } from "@/http/Response";
import { OnBoardingSlice } from "./entities";

export interface IOnBoardingActions {
    getOnBoardingData: () => Promise<HttpResponse<OnBoardingSlice[]>>
}