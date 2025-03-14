export interface MenuItem {
  __typename?: 'RootQueryToMenuItemConnectionEdge'
  node: {
    __typename?: 'MenuItem'
    id: string
    path?: string | null
    url?: string | null
    label?: string | null
  }
}
