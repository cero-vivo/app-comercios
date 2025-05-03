
import { HttpResponse } from "@/http/Response"
import { Business } from "../model/entities"

export const AboutService = () => {
    return {
        getBussinesData: async (): Promise<HttpResponse<Business>> => {
            // Simulamos un fetch retornando una promesa resuelta
            const res: Business = {
                name: 'Pan & App',
                description:
                    `La tintorería en los años 60

Durante los años 60, el cuidado textil comercial era realizado por tintorerías independientes, quienes ofrecían servicios de calidad a clientes regulares, cobrando tarifas complejas y poco claras y sin mencionar los plazos de entrega,  excesivamente largos.

La llegada de 5àsec al mercado.

5àsec abrió su primer local en 1968, basado en un concepto genuinamente  innovador: brindar el servicio de tintorería y lavandería con una muy buena relación calidad/precio, una política de precios transparente, utilizando solo 5 tarifas diferentes (de ahí el “5” en  5àsec) y un tiempo de entrega rápido.

Un desarrollo impresionante

Desde entonces, 5àsec ha experimentado un desarrollo rápido y exitoso, como resultado de una oferta comercial lanzada oportunamente en línea con la evolución de los requerimientos de los clientes. Operando hoy en más de 30 países alrededor del mundo, el grupo comenzó su expansión en Francia, abriendo tiendas en todo país antes de instalarse con éxito en los mercados internacionales,  ya sea directamente o a través de Master Franquiciados`,
                address: 'Av. Juramento 2701, C1428 Cdad. Autónoma de Buenos Aires',
                coordinates: {
                    lat: -34.5636136,
                    lng: -58.4622294
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
                    instagram: '@5asec_juramento',
                    tiktok: '@5asec',
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
