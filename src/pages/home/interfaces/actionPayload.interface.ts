import { CollectionType } from "../consts";

export type GetCollectionDealsPayload = {
    collectionType: CollectionType,
    getPage: number,
    itemsToGet: number
}