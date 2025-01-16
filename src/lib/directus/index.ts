/**
 * Uncomment the following code to enable the Directus SDK
 * Install the SDK via `yarn add @directus/sdk`
 */

// import { createDirectus, DirectusClient, rest, RestClient } from '@directus/sdk'
// import { ImagePreset, Schema } from './schema'

// interface CustomDirectusClient extends DirectusClient<Schema>, RestClient<Schema> {
//   getMediaUrl(id: string, preset?: ImagePreset): string;
// }

// const directus = createDirectus<Schema>(process.env.NEXT_PUBLIC_API_URL!).with(
//   rest({
//     onRequest: (options) => ({ ...options, cache: 'no-store' }),
//   })
// ) as CustomDirectusClient

// directus.getMediaUrl = function (id: string, preset?: ImagePreset) {
//   const url = new this.globals.URL('/assets/' + id, this.url.href)

//   for (const [key, value] of Object.entries(preset || {})) {
//     url.searchParams.set(key, value.toString())
//   }

//   return url.href
// }

// export default directus
