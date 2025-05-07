#### Collection: users
```typescript
export interface User {
  _id: string; // deviceId
  savedPosts: string[]; // Array of postIds NOT STORED IN DB
}
```


#### Collection: posts
```typescript
export interface Post {
  _id: string; // postId
  title: string;
  imageUrl: string;
  description: string;
  expiryTime: string; // ISO string format
  hashtags: string[];
  interactiveLinks: {
    label: string;
    url: string;
  }[];
  origin: {
    type: 'local' | 'admin'; // Origin type (could be local or admin)
    name: string;
    avatarUrl: string;
  };
  timestamp: {
    show: boolean;
    value: string; // ISO string format
  };
}
````
#### Collection: notifications
```typescript
export interface Notification {
  _id: string; // notificationId
  message: string;
  linkedPostId?: string; // Optional link to post
  scheduledAt: string; // ISO string format
  sentBy: {
    adminId: string;
    role: 'local' | 'franchise' | 'group' | 'system';
  };
  sendTo: string | 'all'; // localId or 'all' to send to all users
}
```

#### Collection: admins
```typescript
export interface Admin {
  _id: string; // adminId
  role: 'local' | 'franchise' | 'group' | 'system'; // Role of the admin
  managesEntityId: string; // localId, franchiseId, or groupId
}
````

#### Collection: locals
```typescript
export interface Local {
  _id: string; // localId
  name: string;
  logoUrl: string;
  description: string;
  openingHours: {
    mon: { from: string; to: string }[];
    sat: { from: string; to: string }[];
  };
  contact: {
    phone: string;
    email: string;
    website: string;
    social: {
      instagram: string;
      facebook: string;
    };
  };
}
````
