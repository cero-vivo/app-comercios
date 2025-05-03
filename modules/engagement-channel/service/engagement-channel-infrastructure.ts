import { EngagementChannelActions } from "../model/engagement-channel-actions";
import { EngagementChannelGetPostsRes } from "../model/engagement-channel-responses";
import { FeedPost } from "../model/entities";
import { EngagementChannelResolverScreen } from "../presentation/resolvers-screens";


export const EngagementChannelInfrastructure = (): EngagementChannelActions => {

  return {
    getPost: async (size: number, page: number): Promise<EngagementChannelGetPostsRes> => {
      //Aca se fetchean los posts y se retorna data si es success y error si no
      
      const posts: FeedPost[] = [
        {
          id: "1",
          title: "Nuevo servicio: Ultra Blanco",
          description: "Ideal para tus prendas blancas, máxima luminosidad garantizada.",
          createdAt: "2025-04-01T10:00:00.000Z",
          tags: "news",
        },
        {
          id: "2",
          title: "Promoción especial en lavado express",
          imageUrl: "https://www.5asec.com.ar/sites/5asec_ar/files/push/service-push_homepage_ultra_blanco_0.jpg",
          createdAt: "2025-04-02T11:00:00.000Z",
          tags: "event",
          redirectUrl: "https://www.instagram.com/p/DIua3oJSYJj/",
        },
        {
          id: "3",
          title: "Conocé nuestro servicio Máxima Protección",
          imageUrl: "https://www.5asec.com.ar/sites/5asec_ar/files/push/service-push_homepage_maxima.jpg",
          createdAt: "2025-04-03T09:00:00.000Z",
          tags: "recomendation",
        },
        {
          id: "4",
          title: "¡Edición limitada!",
          description: "Probá nuestro nuevo tratamiento textil con fragancia exclusiva.",
          createdAt: "2025-04-04T08:30:00.000Z",
          tags: "event",
        },
        {
          id: "5",
          title: "Cupón exclusivo 15% OFF",
          description: "Mostrá este cupón y obtené un descuento en tu próximo lavado.",
          createdAt: "2025-04-05T12:00:00.000Z",
          tags: "cupon",
          expiresAt: "2025-04-22T23:59:00.000Z",
        },
        {
          id: "6",
          title: "Nuevos servicios sustentables",
          description: "Incorporamos productos ecológicos y procesos más verdes.",
          imageUrl: "https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(85)/https://assets.iprofesional.com/assets/jpg/2025/01/590267.jpg",
          createdAt: "2025-04-06T10:15:00.000Z",
          tags: "news",
        },
        {
          id: "7",
          title: "Nuestra historia",
          description: "Más de 50 años cuidando tus prendas como nuevas.",
          createdAt: "2025-04-07T08:00:00.000Z",
          tags: "history",
        },
        {
          id: "8",
          title: "Conocé a nuestros expertos",
          description: "Charlamos con Laura, especialista en tejidos delicados.",
          createdAt: "2025-04-08T13:00:00.000Z",
          tags: "cupon",
        },
        {
          id: "9",
          title: "Evento: Lavado gratuito",
          description: "Acercate este sábado y lavamos una prenda sin cargo.",
          createdAt: "2025-04-09T14:00:00.000Z",
          tags: "event",
          expiresAt: "2025-04-20T18:00:00.000Z",
        },
        {
          id: "10",
          title: "Servicio express sin cargo extra",
          description: "Dejá tu ropa a la mañana, retirala ese mismo día.",
          createdAt: "2025-04-10T08:00:00.000Z",
          tags: "recomendation",
        },
        {
          id: "11",
          title: "Cupón para tu próxima compra",
          description: "Aprovechá este beneficio exclusivo.",
          createdAt: "2025-04-11T10:00:00.000Z",
          tags: "cupon",
        },
        {
          id: "12",
          title: "Beneficio Club 5àsec",
          description: "Suscribite y obtené hasta 25% de descuento permanente.",
          imageUrl: "https://www.5asec.es/sites/5asec_es/files/cw_block/carte_privilege/carte-privilege.png",
          createdAt: "2025-04-12T11:00:00.000Z",
          tags: "history",
        },
        {
          id: "13",
          title: "Recomendación del mes: Lavado Ultra",
          description: "La mejor opción para trajes y prendas finas.",
          createdAt: "2025-04-13T08:00:00.000Z",
          tags: "cupon",
        },
        {
          id: "14",
          title: "Promoción por tiempo limitado",
          description: "Descubrí los beneficios únicos que tenemos para vos.",
          createdAt: "2025-04-14T08:30:00.000Z",
          tags: "event",
        },
        {
          id: "15",
          title: "Evento especial: Limpieza de camperas",
          description: "Este sábado: 2x1 en limpieza de abrigos.",
          createdAt: "2025-04-15T17:00:00.000Z",
          tags: "event",
          expiresAt: "2025-04-22T23:59:00.000Z",
        },
        {
          id: "16",
          title: "Cupón: 20% OFF en servicios premium",
          description: "Aprovechá esta oferta por tiempo limitado.",
          createdAt: "2025-04-16T10:45:00.000Z",
          tags: "cupon",
          expiresAt: "2025-04-25T23:59:00.000Z",
        },
        {
          id: "17",
          title: "5àsec: desde 1968",
          description: "Una historia de innovación en limpieza textil.",
          createdAt: "2025-04-17T13:20:00.000Z",
          tags: "history",
        },
        {
          id: "18",
          title: "Nuevos aromas disponibles",
          description: "Probá nuestras fragancias exclusivas.",
          createdAt: "2025-04-18T14:00:00.000Z",
          tags: "news",
        },
        {
          id: "19",
          title: "¡Gran promoción del día!",
          description: "Traé tres prendas, pagá solo dos.",
          imageUrl: "https://noticiasmercedinas.com/site/wp-content/uploads/2022/04/Flyer1-1-e1650283364179-1024x815.jpg",
          createdAt: "2025-04-19T11:00:00.000Z",
          tags: "event",
        },
        {
          id: "20",
          title: "Conocé a nuestro equipo técnico",
          description: "Una historia que vale la pena conocer.",
          createdAt: "2025-04-20T09:00:00.000Z",
          tags: "cupon",
        },
      ];
      
      return {
        res: {
          code: 200,
          data: posts
        }
      }
    }
  }
}