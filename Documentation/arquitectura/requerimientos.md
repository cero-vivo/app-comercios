## Requerimientos

### Funcionales

#### Must (Esenciales)

- La aplicación debe permitir a los usuarios navegar sin necesidad de registro o inicio de sesión.
- La aplicación debe mostrar un feed de contenido configurable por el administrador del local, franquicia o conglomerado.

Cada publicación en el feed debe poder incluir los siguientes elementos:

    Título (string, requerido): Título principal del post.

    Imagen (URL, opcional): Imagen destacada que acompaña el post.

    Descripción (string, opcional): Texto extendido o detalle del contenido.

    Tiempo de vida (datetime, opcional): Si se establece, la publicación será removida del feed automáticamente al llegar a esa fecha.

    Tipo: "Promocion", "Cupon", "Historia". Si se configura el usuario puede filtrar por este tipo.

    Hashtags o etiquetas (string[], opcional): Para clasificación temática o visual.

    Guardable (boolean): Debe poder ser guardado por el usuario en su base de datos local.

    Links interactivos ([{ label, url }], opcional): Enlaces que el usuario puede presionar.

    Identidad del origen ({ tipo, nombre, avatarUrl }): En caso de conglomerado o franquicia, se debe mostrar claramente quién está publicando (con nombre y avatar del local o marca).

    Timestamp de publicacion ({mostrar: boolean, timestamp: string})

Visibilidad (scope): Determina si fue publicado a nivel de local, franquicia o conglomerado, y desde dónde se puede ver.
- El sistema debe permitir el envío de notificaciones push y notificaciones in-app por parte de los administradores de local, franquicia y conglomerado.
- El contenido textual de la aplicación (títulos, descripciones, onboarding, etc.) debe ser modificable desde una consola de cliente.
- La consola de cliente debe permitir gestionar múltiples niveles jerárquicos (local, franquicia, conglomerado).
- Los administradores de local deben poder publicar promociones, horarios y otros contenidos relevantes.
- El sistema debe soportar feeds por local, feed unificado de franquicia y feed general de conglomerado.
- La consola debe permitir limitar y auditar el envío de notificaciones por parte de los locales.
- La aplicación debe estar disponible en App Store y Google Play, orientada al posicionamiento de marca.

#### Should (Importantes)

- El sistema **debería permitir establecer límites configurables por franquicia o conglomerado sobre cuántas notificaciones puede enviar cada local**.
- La consola **debería incluir estadísticas básicas sobre interacciones de usuarios con los contenidos y notificaciones**.
- Los administradores **deberían poder programar publicaciones o notificaciones para fechas y horas futuras**.
- El usuario debería poder guardar publicaciones para acceso rápido, las cuales se almacenarán localmente en la base de datos del dispositivo, sin sincronización remota.
- Las publicaciones guardadas deberían persistir mientras la aplicación no sea desinstalada.

#### Could (Deseables)

- La app **podría permitir organizar las publicaciones guardadas en categorías locales creadas por el usuario** (por ejemplo: “Ofertas”, “Eventos”, “Favoritos”).