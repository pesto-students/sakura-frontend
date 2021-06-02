import { getHttp } from "../../shared/services/http.service";
import { getSearchResults } from "../../shared/consts";


export const getSearchBarResults = (matchString: string) => {
    const url = getSearchResults();
    const result = getHttp<any>(url, { params: { match: matchString } });
    return result;
}
