export type OpeningHours = {
	day: string
	shifts?: {
		from?: string // "06:00"
		to?: string   // "20:00"
		close?: boolean
	}[]
}

export type Business = {
	name: string
	description: string
	address?: string
	coordinates?: {
		lat: number
		lng: number
	}
	imagesUrl?: string[]
	contact?: {
		phone?: string
		email?: string
		instagram?: string
		tiktok?: string
	}
	openingHours?: OpeningHours[]
	isOpen?: boolean
	closesAt?: string // ISO format or "HH:mm"
}
