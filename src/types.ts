
export type Language = 'JavaScript' | 'TypeScript' | 'CSS' | 'HTML'

export type Tag = 'React' | 'Hooks' | 'CSS' | 'Layout' | 'Performance' | 'TypeScript' | 'Testing'

export interface Snippet {
  id: number
  title: string
  code: string
  language: Language
  tags: Tag[]
}

export type SnippetInput = Omit<Snippet, 'id'>