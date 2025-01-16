export type ImagePreset = {
  key?: string
  width?: number
  height?: number
  quality?: number
}

export type Schema = {
  // *** These are examples ***
  // regular collections are array types
  collection_a: CollectionA[]
  // singleton collections are singular types
  collection_c: CollectionC
}
