export const API_URL = process.env["REACT_APP_API_URL"];

/** Home page URIs */
// export const getProductsUrl = () => `${API_URL}/product`;
// export const getTopCategoriesUrl = () => `${API_URL}/category/top`;
// export const getTopProductsByCategoryUrl = (categoryId: number) => `${API_URL}/category/${categoryId}/product/top`;

export const getExclusivePromoUrl = () => `${API_URL}/api/promo/exclusive`
export const getHotDealsUrl = () => `${API_URL}/api/promo/hot-deal`
export const getProductDetailUrl = (productId: string) => `${API_URL}/api/product/${productId}`

