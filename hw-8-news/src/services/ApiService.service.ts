import {dataParser} from "../helpers/dataParser";
import {DataInterface} from "../interfaces/data.Interface";

export class ApiService {
     async getNews(id: string): Promise<Array<DataInterface>> {
        const response = await fetch(`backend/${id}.php`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            },
        }).then(res => res.json());
        return dataParser(response, id);
    }
}