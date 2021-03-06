import {dataParser} from "../helpers/dataParser";
import {IDataInterface} from "../interfaces/data.Interface";

export class ApiService {
    async getNews(id: string): Promise<Array<IDataInterface>> {
        let response = await fetch(`backend/${id}.php`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            },
        }).then(res => res.json());
        return dataParser(response,id);
    }
}