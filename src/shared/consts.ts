import { API_URL } from "./env";

/** Home page URIs */
export const getSearchResults = () => `${API_URL}/category`;




export const getExclusivePromoUrl = () => `${API_URL}/promo/exclusive`
export const getHotDealsUrl = () => `${API_URL}/promo/hot-deal`
export const getProductDetailUrl = (productId: string) => `${API_URL}/product/${productId}`
export const getProductOptions = (productId: string) => `${API_URL}/product/${productId}/options`

