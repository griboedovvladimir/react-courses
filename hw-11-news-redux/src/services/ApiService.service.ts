import {dataParser} from "../helpers/dataParser";
import {IDataInterface} from "../interfaces/interfaces";

export class ApiService {
    public category = ['people', 'realt', 'auto','tech'];
    
    getAllNews(): Promise<Array<IDataInterface>>[] {
       return this.category.map((category) => {
           return this.getNews(category)
       } )
    } 
    
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