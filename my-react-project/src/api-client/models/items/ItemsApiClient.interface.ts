// file: src/api-client/models/items/ItemsApiClient.interface.ts

import { ItemInterface } from '@/models/items/Item.interface'

/**
 * @Name ItemsApiClientInterface
 * @description
 * Interface for the Items api client module
 */
export interface ItemsApiClientInterface {
  fetchItems: () => Promise<ItemInterface[]>
}
