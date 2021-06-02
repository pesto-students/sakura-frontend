import { getHttp } from "../../shared/services/http.service";
import { getExclusivePromoUrl, getHotDealsUrl } from "../../shared/consts";


export const getExclusivePromoEvents = () => {
    const url = getExclusivePromoUrl();
    const result = getHttp<any>(url);
    return result;
}

export const getHotProducts = () => {
    const url = getHotDealsUrl();
    const result = getHttp<any>(url);
    return result;
}

// // ************** Transforms (Start) *******************

// export const productsMappedForCardService = (products: IProduct[]): ProductDescriptionType[] => {
//     const transform = {
//         id: "productId",
//         title: "productName",
//         price: "discountedPrice",
//         // description: string;
//         // categoryId: number;
//         image: "productImage"
//     }
//     return products.map(product => merge(product, transform) as ProductDescriptionType);
// }

// // ************** Transforms (End) *******************

// // ************** Products (Start) *******************

// export  const getAllProductsService = (limit = 5, page = 0, all = true): ApiResponseObservable<ProductDescriptionType[]> => {
//     const url = getProductsUrl();
//     const result = getHttp<ProductDescriptionType[]>(url, {
//         params: {
//             all,
//             limit,
//             page
//         }
//     });
//     return result;
// }

// // ************** Products (End) *******************

// //  ******************* Category (Start) *********************** 

// export const getTopProductsByCategoryService = (categoryId:number, limit = 5, page = 0, all = true): ApiResponseObservable<ProductDescriptionType[]> => {
//     const url = getTopProductsByCategoryUrl(categoryId);
//     const result = getHttp<ProductDescriptionType[]>(url, {
//         params: {
//             all,
//             limit,
//             page
//         }
//     });
//     return result;
// }

// export const getHotDealsService = () => {
//     const url = getTopCategoriesUrl();
//     const result = getHttp<ICategory[]>(url);
//     return result;
// }

// //  ******************* Category (End) *********************** 

// // ****