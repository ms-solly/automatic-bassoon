

export type SearchResult = 
  | { type: 'user'; id: number; username: string; avatarUrl: string }
  | { type: 'post'; id: number; title: string; description: string }
  | { type: 'recipe'; id: number; title: string; description: string; imageUrl: string };
