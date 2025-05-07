#### Users
```typescript
export interface User {
  _id: string // deviceId
  savedPosts: string[] // Array of postIds NOT STORED IN DB
}
```
#### Posts
```typescript
export interface Post {
  _id: string // postId
  title: string
  imageUrl: string
  description: string
  expiryTime: string // ISO string format
  hashtags: string[]
  interactiveLinks: { label: string,url: string }[]
  origin: {
    type: 'local' | 'admin' | 'system'  // Origin type (could be local or admin)
    name: string
    avatarUrl: string
  }
  timestamp: {
    show: boolean
    value: string // ISO string format
  }
}
```

#### Notifications
```typescript
export interface Notification {
  _id: string // notificationId
  message: string
  linkedPostId?: string // Optional link to post
  scheduledAt: string // ISO string format
  sentBy: {
    adminId: string
    role: 'local' | 'admin' | 'system'
  }
  sendTo: string | 'all' // localId or 'all' to send to all users
}
```

#### Admins
```typescript
export interface Admin {
  _id: string // adminId
  role: 'local' | 'admin' | 'system' // Role of the admin
  managesEntityId: string[] // localId, franchiseId, or groupId
}
```


#### Locals
```typescript
export interface Contact {
  phone: string
  email: string
  website: string
  social: {
    instagram: string
    facebook: string
  }
}
export interface Local {
  _id: string // localId
  name: string
  logoUrl: string
  description: string
  openingHours: {
    1?: { from: string to: string }[]
    2?: { from: string to: string }[]
    3?: { from: string to: string }[]
    4?: { from: string to: string }[]
    5?: { from: string to: string }[]
    6?: { from: string to: string }[]
    7?: { from: string to: string }[]
  }
  contact: Contact
}
```
