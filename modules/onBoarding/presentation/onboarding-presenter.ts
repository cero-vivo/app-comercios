import { IOnBoardingActions } from "../model/interface-on-boarding-actions";
import { onBoardingService } from "../service/onboarding-service";
import { OnBoardingActionsResolver } from "./onboarding-actions-resolver";

export const onBoardingPresenter = (screenHandler: OnBoardingActionsResolver) => {
	
	const service = onBoardingService();

	return {
		getOnBoardingData: async () => {
			try {
				const res = await service.getOnBoardingData();
				screenHandler.getOnBoardingDataSuccess(res);
			} catch (error) {
				screenHandler.getOnBoardingDataError(error);
			}
		},
	};
};
