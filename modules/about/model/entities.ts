export type OpeningHours = {
	day: "0" | "1" | "2" | "3" | "4" | "5" | "6"
	shifts?: {
		from?: string // "06:00"
		to?: string   // "20:00"
		close?: boolean
	}[]
}

export type Contact = {
	phone?: string
	whatsapp?: string
	email?: string
	website?: string
	instagram?: string
	tiktok?: string
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
	contact?: Contact
	openingHours?: OpeningHours[]
	isOpen?: boolean
	closesAt?: string // ISO format or "HH:mm"
}
