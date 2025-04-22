import { useEffect, useState } from 'react'
import { Business } from '../model/entities'
import { AboutPresenter } from '../presentation/about-presenter'
import { AboutActionsResolver } from '../presentation/about-actions-resolver'

export const useAboutScreen = () => {

	const [brandData, setBrandData] = useState<Business>()

	const actionsHandler: AboutActionsResolver = {
		getBusinessDataSuccess: (res) => {
			console.log("🚀 ~ useAboutScreen ~ res:", res)
			setBrandData(res.data)
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
		brandData
	}
}
