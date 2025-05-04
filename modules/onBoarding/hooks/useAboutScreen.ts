import { useEffect, useState } from 'react'
import { Business } from '../model/entities'
import { AboutPresenter } from '../presentation/onboarding-presenter'
import { AboutActionsResolver } from '../presentation/onboarding-actions-resolver'

export const useAboutScreen = () => {

	const [businessData, setBusinessData] = useState<Business>()

	const actionsHandler: AboutActionsResolver = {
		getBusinessDataSuccess: (res) => {
			setBusinessData(res.data)
		},
		getBusinessDataError: (error) => {
			console.log(error)
		},
	}
	
	const presenter = AboutPresenter(actionsHandler)

	useEffect(() => {
		presenter.getBusinessData()
	}, [])

	return {
		businessData
	}
}
