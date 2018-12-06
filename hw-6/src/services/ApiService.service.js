import {dataParser} from "../helpers/dataParser";

export class ApiService {
    async getNews(id) {
        let response = await fetch(`backend/${id}.php`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            },
        }).then(res => res.json());
        return dataParser(response,id);
    }
}