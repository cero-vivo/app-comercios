import React, { useState } from 'react'

export const useHomeHeaderUI = () => {

    const [bannerIsOpen, setBannerIsOpen] = useState(false);

	return {
		bannerIsOpen,
		setBannerIsOpen
	}
}
