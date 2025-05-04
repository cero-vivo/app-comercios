
import { HttpResponse } from "@/http/Response"
import { IOnBoardingActions } from "../model/interface-on-boarding-actions"
import { OnBoardingSlice } from "../model/entities"

export const onBoardingService = (): IOnBoardingActions => {
    return {
        getOnBoardingData: async (): Promise<HttpResponse<OnBoardingSlice[]>> => {
            // Simulamos un fetch retornando una promesa resuelta
            const res: OnBoardingSlice[] = [
                {
                    iconURL: require("@/assets/images/logo-1.png"),
                    title: "Tu negocio, en el bolsillo de tus clientes",
                    description: "Conecta con tus clientes de forma directa, sin intermediarios. Publica novedades, activa notificaciones y gestiona la información de cada sucursal."
                },
                {
                    iconURL: require("@/assets/images/logo-1.png"),
                    title: "Comparte novedades en tiempo real",
                    description: "Envía notificaciones push y in-app personalizadas por sucursal.Promociones, recordatorios y noticias, sin depender de redes sociales."
                },
                {
                    iconURL: require("@/assets/images/logo-1.png"),
                    title: "Información clara y siempre actualizada",
                    description: "Ayuda a tus clientes a encontrarte fácilmente.Comparte horarios de atención, medios de contacto, ubicación en el mapa y una presentación profesional de cada sucursal, todo desde la app."
                },
                {
                    iconURL: require("@/assets/images/logo-1.png"),
                    title: "Tu canal directo ya está listo",
                    description: "Elegí una sucursal y empezá a comunicarte con tus clientes de forma simple, rápida y efectiva.Publicá contenido, enviá notificaciones y gestioná la presencia digital de tu negocio desde un solo lugar."
                }
            ]

            return {
                code: 200,
                data: res,
            }
        },
    }
}
