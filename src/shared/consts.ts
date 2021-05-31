export let API_URL = "";

if (process.env["NODE_ENV"] === "development") {
    API_URL = `${process.env["REACT_APP_API_URL"]}/api`;
} else {
    API_URL = "/api";
}
// export const API_URL = `/api`;

/** Home page URIs */
// export const getProductsUrl = () => `${API_URL}/product`;
// export const getTopCategoriesUrl = () => `${API_URL}/category/top`;
// export const getTopProductsByCategoryUrl = (categoryId: number) => `${API_URL}/category/${categoryId}/product/top`;

export const getExclusivePromoUrl = () => `${API_URL}/promo/exclusive`
export const getHotDealsUrl = () => `${API_URL}/promo/hot-deal`

