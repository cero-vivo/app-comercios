[ React Native App ]
       |
       |— Fetch feed (Firestore)
       |— Listen to notifications (FCM)
       |— Save local posts (AsyncStorage/SQLite)
       |— Access offline content
       |
[ Firebase Firestore ]
  |— posts
  |— notifications
  |— users (deviceId)
  |— locals / franchises / groups
  |— admins
       |
[ Firebase Storage ] — (images/files)
       |
[ Firebase Functions ]
  |— notificación programada
  |— control de límites
  |— limpieza de contenido expirado
       |
[ Firebase FCM ]
  |— envío push (broadcast, segmentado)
