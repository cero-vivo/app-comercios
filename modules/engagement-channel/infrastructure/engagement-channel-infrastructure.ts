import { EngagementChannelGetPostsRes } from "../domain/engagement-channel-responses";
import { Post } from "../domain/entities";
import { EngagementChannelResolverScreen } from "../domain/resolvers-screens";


export const EngagementChannelInfrastructure = () => {

  return {
    getPost: async (size: number, page: number): Promise<EngagementChannelGetPostsRes> => {
      //Aca se fetchean los posts y se retorna data si es success y error si no

      const posts: Post[] = [
        {
          id: '1',
          title: '¡Hoy pan recién horneado desde las 6AM!',
          content: 'Pasá por la panadería temprano y llevate tu pan calentito. 🍞 Además, si venís con tu taza, te regalamos un café ☕️.',
        },
        {
          id: '2',
          title: 'Promo de la semana: 2x1 en medialunas 🥐',
          content: 'De lunes a viernes, llevate 2 medialunas al precio de 1 entre las 17 y 19 hs. Ideal para la merienda 👌.',
        },
        {
          id: '3',
          title: 'Sábado de degustación 🧁',
          content: 'Este sábado, probá nuestras nuevas variedades de muffins y facturas ¡gratis! Vení con tu app y mostrá este mensaje para acceder.',
        },
        {
          id: '4',
          title: '¿Conocés nuestro pan de masa madre?',
          content: 'Hecho con fermentación natural durante 48hs. Más saludable, más rico. Preguntá por él cuando vengas 🥖.',
        },
        {
          id: '5',
          title: 'Felices los viernes con budines caseros 🍰',
          content: 'Cada viernes preparamos una tanda especial de budines. Esta semana: limón y amapola. Mostrá tu app y llevate un descuento del 15%.',
        },
        {
          id: '6',
          title: 'Nuevo horario de atención ⏰',
          content: 'Ahora abrimos de lunes a domingo, de 6:00 a 21:00. ¡Más tiempo para pasar por tus favoritos!',
        },
        {
          id: '7',
          title: '¡Sumá puntos con cada compra!',
          content: 'Recordá escanear tu app al pagar y sumá puntos para canjear por productos gratis. Mirá tu progreso en la sección "Fidelización".',
        },
        {
          id: '8',
          title: 'Recomendá la app y ganá',
          content: 'Si un amigo se descarga la app con tu código, ambos ganan un café gratis. ☕ ¡Compartí y disfrutá!',
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