import { ProductDescriptionType } from "../../../components/Card";
import { ICategory } from "../../../models/category.model";

export type CollectionState = {
    items: ProductDescriptionType[] | [],
    latestPageFetched: number
}

export type HomeState = {
    menCollection: CollectionState,
    womenCollection: CollectionState,
    kidCollection: CollectionState,
    accessoryCollection: CollectionState,
    topCategories: ICategory[],
    
}