
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
                    "https://www.5asec.com.ar/sites/5asec_ar/files/push/service-push_homepage_ultra_blanco_0.jpg",
                    "https://www.5asec.com.ar/sites/5asec_ar/files/push/service-push_homepage_maxima.jpg",
                    "https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(85)/https://assets.iprofesional.com/assets/jpg/2025/01/590267.jpg",
                    "https://www.5asec.es/sites/5asec_es/files/cw_block/carte_privilege/carte-privilege.png"
                ],
                contact: {
                    phone: '0810 888 5273',
                    email: 'info@5asec.com.ar',
                    instagram: '@cero.vivo',
                    tiktok: '@julietagarcia1515',
                    whatsapp: '+54 9 11 2388 1314',
                    website: "https://www.5asec.com.ar/"
                },
                openingHours: [
                    {
                        day: 'Lunes', shifts: [
                            { from: '07:00', to: '13:50' },
                            { from: '16:00', to: '22:00' }
                        ]
                    },
                    {
                        day: 'Martes', shifts: [
                                { from: '07:00', to: '13:50' },
                            { from: '16:00', to: '22:00' }
                        ]
                    },
                    {
                        day: 'Miercoles', shifts: [
                                { from: '07:00', to: '13:50' },
                            { from: '16:00', to: '22:00' }
                        ]
                    },
                    {
                        day: 'Jueves', shifts: [
                                { from: '07:00', to: '13:50' },
                            { from: '16:00', to: '22:00' }
                        ]
                    },
                    {
                        day: 'Viernes', shifts: [
                                { from: '07:00', to: '13:50' },
                            { from: '16:00', to: '22:00' }
                        ]
                    },
                    {
                        day: 'Sábados', shifts: [
                            { close: true }
                        ]
                    },
                    {
                        day: 'Domingo', shifts: [
                            { close: true }
                        ]
                    },
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
