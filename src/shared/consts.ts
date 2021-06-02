export const API_URL = process.env["REACT_APP_API_URL"];

/** Home page URIs */
export const getSearchResults = () => `${API_URL}/category`;




export const getExclusivePromoUrl = () => `${API_URL}/promo/exclusive`
export const getHotDealsUrl = () => `${API_URL}/promo/hot-deal`
export const getProductDetailUrl = (productId: string) => `${API_URL}/product/${productId}`

