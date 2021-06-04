import { getSearchListUrl } from "../../shared/consts";
import { getHttp } from "../../shared/services/http.service";

export const getSearchListService = (subCategoryId: number) => {
    const url = getSearchListUrl(subCategoryId);
    const result = getHttp<any>(url);
    return result;
}