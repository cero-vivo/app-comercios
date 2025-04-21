import { EngagementChannelGetPostsRes } from "../domain/engagement-channel-responses";
import { FeedPost } from "../domain/entities";
import { EngagementChannelResolverScreen } from "../domain/resolvers-screens";


export const EngagementChannelInfrastructure = () => {

  return {
    getPost: async (size: number, page: number): Promise<EngagementChannelGetPostsRes> => {
      //Aca se fetchean los posts y se retorna data si es success y error si no

      const posts: FeedPost[] = [
        {
          id: "1",
          title: "Nuevo producto: Pan de masa madre",
          description: "Ideal para acompañar tu café de la mañana.",
          createdAt: "2025-04-01T10:00:00.000Z",
          tags: "recomendation",
        },
        {
          id: "2",
          title: "Promo de 2x1 en medialunas",
          description: "Incorporamos opciones sin gluten y veganas.",
          imageUrl: "https://images.pexels.com/photos/30677840/pexels-photo-30677840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          createdAt: "2025-04-02T11:00:00.000Z",
          tags: "cupon",
        },
        {
          id: "3",
          title: "¡Pan recién horneado disponible!",
          imageUrl: "https://images.pexels.com/photos/2527676/pexels-photo-2527676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          createdAt: "2025-04-03T09:00:00.000Z",
        },
        {
          id: "4",
          title: "Recomendación del día: Focaccia",
          description: "Probalo antes que se agote, edición limitada.",
          createdAt: "2025-04-04T08:30:00.000Z",
          tags: "recomendation",
        },
        {
          id: "5",
          title: "Cupón para tu próxima compra",
          description: "Mostrá este cupón y obtené un 15% de descuento.",
          createdAt: "2025-04-05T12:00:00.000Z",
          tags: "cupon",
          expiresAt: "2025-04-30T23:59:00.000Z",
        },
        {
          id: "6",
          title: "Novedades en nuestra panadería",
          description: "Incorporamos opciones sin gluten y veganas.",
          imageUrl: "https://images.pexels.com/photos/8504385/pexels-photo-8504385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          createdAt: "2025-04-06T10:15:00.000Z",
          tags: "news",
        },
        {
          id: "7",
          title: "Historia de nuestra receta tradicional",
          description: "Nuestra historia comienza hace más de 50 años...",
          createdAt: "2025-04-07T08:00:00.000Z",
          tags: "history",
        },
        {
          id: "8",
          title: "Conocé a nuestros panaderos",
          description: "Charlamos con Juan, nuestro maestro panadero.",
          createdAt: "2025-04-08T13:00:00.000Z",
          tags: "history",
        },
        {
          id: "9",
          title: "Evento: Degustación gratuita",
          description: "Venite este sábado a probar nuestros nuevos productos.",
          createdAt: "2025-04-09T14:00:00.000Z",
          tags: "event",
          expiresAt: "2025-04-20T18:00:00.000Z",
        },
        {
          id: "10",
          title: "¡Pan recién horneado disponible!",
          description: "Te esperamos con pan caliente recién salido del horno.",
          createdAt: "2025-04-10T08:00:00.000Z",
        },
        {
          id: "11",
          title: "Cupón para tu próxima compra",
          createdAt: "2025-04-11T10:00:00.000Z",
          tags: "cupon",
        },
        {
          id: "12",
          title: "Pan de campo tradicional",
          description: "Una tradición familiar que se mantiene viva.",
          createdAt: "2025-04-12T11:00:00.000Z",
          imageUrl: "https://images.pexels.com/photos/16402067/pexels-photo-16402067/free-photo-of-comida-azucar-postre-dulce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          tags: "history",
        },
        {
          id: "13",
          title: "Recomendación del día: Focaccia",
          createdAt: "2025-04-13T08:00:00.000Z",
          tags: "recomendation",
        },
        {
          id: "14",
          title: "¡Pan recién horneado disponible!",
          description: "Descubrí los beneficios únicos que tenemos para vos.",
          createdAt: "2025-04-14T08:30:00.000Z",
        },
        {
          id: "15",
          title: "Evento: Degustación gratuita",
          createdAt: "2025-04-15T17:00:00.000Z",
          tags: "event",
          expiresAt: "2025-04-22T23:59:00.000Z",
        },
        {
          id: "16",
          title: "Cupón para tu próxima compra",
          description: "Aprovechá esta oferta por tiempo limitado.",
          createdAt: "2025-04-16T10:45:00.000Z",
          tags: "cupon",
          expiresAt: "2025-04-25T23:59:00.000Z",
        },
        {
          id: "17",
          title: "Historia de nuestra receta tradicional",
          createdAt: "2025-04-17T13:20:00.000Z",
          tags: "history",
        },
        {
          id: "18",
          title: "Novedades en nuestra panadería",
          description: "Probalo antes que se agote, edición limitada.",
          createdAt: "2025-04-18T14:00:00.000Z",
          tags: "news",
        },
        {
          id: "19",
          title: "¡Gran promoción del día!",
          createdAt: "2025-04-19T11:00:00.000Z",
          imageUrl: "https://images.pexels.com/photos/31709930/pexels-photo-31709930/free-photo-of-delicioso-pan-de-almendras-casero-en-una-tabla-de-cortar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          tags: "cupon",
        },
        {
          id: "20",
          title: "Conocé a nuestros panaderos",
          description: "Una historia que vale la pena conocer.",
          createdAt: "2025-04-20T09:00:00.000Z",
          tags: "history",
        },
      ]
      return {
        res: {
          code: 200,
          data: posts
        }
      }
    }
  }
}