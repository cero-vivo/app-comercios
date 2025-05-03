🏪 App de Comercios

Aplicación adaptable para comercios, enfocada en aumentar las ventas y ganar presencia en la vida diaria de tus clientes.
✨ Características principales

    📢 Feed + Notificaciones Push
    Publica novedades, ofertas, eventos o cualquier contenido que quieras comunicar directamente a tus clientes con notificaciones en tiempo real.

    🧾 Sección "Sobre el Comercio"
    Una página dedicada para contar la historia, visión y propuesta de valor de tu negocio.

⚙️ Configuración de entorno

La app soporta múltiples entornos (dev, qa, production). Para configurar el entorno actual:

    Editá el archivo:

app/config/config.environment.ts

    Seleccioná el entorno que quieras usar:

export const ENVIRONMENT = 'dev'; // opciones: 'dev', 'qa', 'production'

    Creá un archivo .env en la raíz del proyecto (o en la carpeta correspondiente si usás múltiples .env) con las variables necesarias, por ejemplo:

API_URL=https://api.miapp.com
FIREBASE_API_KEY=tu_clave

    Asegurate de que las variables coincidan con las que se espera en el código.

🎨 Personalización de marca
1. Paleta de colores

Modificá los colores en:

app/styles/colors.ts

2. Reemplazá los logos e íconos

Sustituí los archivos en assets/images/:

    splash-icon.png

    logo.png

    app-icon.png

🧑‍💻 Tecnologías utilizadas

    React Native

    TypeScript

    Firebase (notificaciones push)

    Dotenv (configuración de variables de entorno)

🚧 Próximas mejoras

    Integración con catálogo de productos

    Carrito de compras

    Estadísticas de interacción del cliente