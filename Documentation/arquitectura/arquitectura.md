# Arquitectura General

## 1. App Móvil (Usuario Final)

- Sin registro, acceso directo al contenido.
- Interactúa con:
  - Firestore (lectura de posts, guardados)
  - Firebase Cloud Messaging (notificaciones push)
  - Firebase Storage (imágenes de publicaciones)

## 2. Firebase (Backend)

### Firestore (Base de Datos NoSQL)

- **posts**: Publicaciones visibles en el feed.
- **users**: Usuarios identificados por `deviceId`, con posts guardados.
- **notifications**: Mensajes enviados a distintos niveles (local, franquicia, grupo).
- **admins**: Roles administrativos (local, franquicia, grupo, sistema).
- **locals**: Tiendas o sucursales individuales.

#### Relaciones
- `posts.origin` puede ser local, franquicia o grupo.
- `notifications.linkedPostId` → referencia a `posts`
- `notifications.sentBy.adminId` → referencia a `admins`
- `users.savedPosts[]` → array de referencias a `posts`

### Firebase Cloud Messaging (FCM)

- Envía notificaciones a:
  - Todos los usuarios
  - Usuarios segmentados por local, franquicia o grupo

### Firebase Storage

- Almacena imágenes asociadas a:
  - Publicaciones
  - Avatares de origen (local/franquicia/grupo)
  - Logos institucionales

## 3. Consola de Administración (Web)

Sin necesidad de registro, acceso mediante autenticación de admin.

Interactúa con:

- **Firestore** (gestión de publicaciones, notificaciones y configuraciones de roles)
- **Firebase Cloud Messaging** (envío de notificaciones push)
- **Firebase Storage** (gestión de imágenes asociadas a publicaciones, avatares y logos)

### Roles de Administración:

#### Admin de Local:
- Gestiona el feed del local.
- Publica contenido (promociones, horarios, etc.).
- Envía notificaciones específicas del local.
- Define límites y métricas del local.

#### Admin de Grupo (Conglomerado):
- Gestiona múltiples locales.
- Publica contenido a nivel global (grupo o locales especificos).
- Envía notificaciones a nivel grupo o locales.
- Configura políticas globales y audita la actividad de las franquicias.

#### Admin del Sistema:
- Tiene acceso completo a la infraestructura.
- Configura roles y permisos de los administradores de locales, franquicias y conglomerados.
- Gestiona la seguridad y el mantenimiento general del sistema.

### Funciones de la Consola:

#### Gestión de Publicaciones:
- Crear, editar y programar publicaciones.
- Asignar publicaciones a locales, franquicias o conglomerados.
- Configuración de la visibilidad y caducidad de las publicaciones.

#### Envío de Notificaciones:
- Creación y envío de notificaciones push a usuarios finales.
- Notificaciones segmentadas por local, franquicia o conglomerado.
- Programación de notificaciones.

#### Gestión de Límites y Políticas:
- Configuración de límites para cada nivel de administración (local, franquicia, grupo).
- Políticas de control de notificaciones (frecuencia, contenido permitido).

#### Visualización de Métricas e Interacciones:
- Acceso a estadísticas sobre la efectividad de las publicaciones y las interacciones con los usuarios.
- Métricas consolidadas y específicas de locales o franquicias.
