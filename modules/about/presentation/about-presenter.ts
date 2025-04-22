import { HttpResponse } from "@/http/Response";
import { Business } from "../model/entities";
import { AboutService } from "../service/about-service";
import { AboutActionsResolver } from "./about-actions-resolver";

export const AboutPresenter = (screenHandler: AboutActionsResolver) => {
	const aboutService = AboutService();

	return {
		getBusinessData: async () => {
			try {
				const res = await aboutService.getBussinesData();
				screenHandler.getBusinessDataSuccess(res);
			} catch (error) {
				screenHandler.getBusinessDataError(error);
			}
		},
	};
};
