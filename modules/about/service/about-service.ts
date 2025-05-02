
import { HttpResponse } from "@/http/Response"
import { Business } from "../model/entities"

export const AboutService = () => {
    return {
        getBussinesData: async (): Promise<HttpResponse<Business>> => {
            // Simulamos un fetch retornando una promesa resuelta
            const res: Business = {
                name: 'Pan & App',
                description:
                    'Desde una esquina tranquila del barrio, Pan & Abrazo nació como una panadería familiar con un solo propósito: devolverle a la mesa el aroma del pan recién horneado y el valor de los pequeños gestos.',
                address: 'Champagnat 499 Panamericana Ramal Pilar Km 54,5, B1629 Pilar, Provincia de Buenos Aires',
                coordinates: {
                    lat: -34.4496111,
                    lng: -58.9196427
                },
                imagesUrl: [
                    "https://images.pexels.com/photos/30677840/pexels-photo-30677840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "https://images.pexels.com/photos/2527676/pexels-photo-2527676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "https://images.pexels.com/photos/8504385/pexels-photo-8504385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "https://images.pexels.com/photos/16402067/pexels-photo-16402067/free-photo-of-comida-azucar-postre-dulce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                ],
                contact: {
                    phone: '+54 9 11 6362 1415',
                    email: 'pan&app@app.com',
                    instagram: '@pan8app',
                    tiktok: '@pan8app',
                },
                openingHours: [
                    { day: 'Lunes', from: '07:00', to: '01:50' },
                    { day: 'Martes', from: '07:00', to: '01:50' },
                    { day: 'Miercoles', from: '07:00', to: '01:50' },
                    { day: 'Jueves', from: '07:00', to: '01:50' },
                    { day: 'Viernes', from: '07:00', to: '01:50' },
                    { day: 'Sábados', from: '07:00', to: '18:00' },
                    { day: 'Domingo', from: '07:00', to: '01:50' },
                ],
                isOpen: true,
                closesAt: '19:30',
            }

            return {
                code: 200,
                data: res,
            }
        },
    }
}
