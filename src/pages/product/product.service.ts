import { merge } from "object-mapper";
import { getHttp } from "../../shared/services/http.service";
import { getProductDetailUrl } from "../../shared/consts";


export const getProductDetail = (productId: string) => {
    const url = getProductDetailUrl(productId);
    const result = getHttp<any>(url);
    return result;
}