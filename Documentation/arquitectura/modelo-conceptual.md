NO SQL

// Collection: users
{
  "_id": "<deviceId>",
  "savedPosts": ["<postId1>", "<postId2>", ...]
}

// Collection: posts
{
  "_id": "<postId>",
  "title": "Summer Sale",
  "imageUrl": "https://...",
  "description": "50% off...",
  "expiryTime": "2025-05-10T18:00:00Z",
  "hashtags": ["sale", "summer"],
  "interactiveLinks": [
    { "label": "Shop Now", "url": "https://..." }
  ],
  "origin": {
    "type": "local", // or "franchise" or "group"
    "name": "Local A",
    "avatarUrl": "https://..."
  },
  "timestamp": {
    "show": true,
    "value": "2025-05-01T10:00:00Z"
  },
}

// Collection: notifications
{
  "_id": "<notificationId>",
  "message": "Check our new deal!",
  "targetScope": "franchise",
  "linkedPostId": "<postId>", // optional
  "scheduledAt": "2025-05-07T09:00:00Z",
  "sentBy": {
    "adminId": "<adminId>",
    "role": "franchise"
  }
}

// Collection: admins
{
  "_id": "<adminId>",
  "role": "local", // or "franchise", "group", "system"
  "managesEntityId": "<localId | franchiseId | groupId>"
}

// Collection: locals
{
  "_id": "<localId>",
  "name": "Store 45",
  "logoUrl": "", 
  "description": "Our downtown location...",
  "openingHours": {
    "mon": [{from: "09:00", to: "13:30"}, {from: 16:00, to: 21:00}],
    "sat": ["10:00", "14:00"]
  },
  "contact": {
    "phone": "+123456789",
    "email": "store@example.com",
    "website": "https://...",
    "social": {
      "instagram": "...",
      "facebook": "..."
    }
  }
}