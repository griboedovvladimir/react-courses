import {IChoice} from "../interfaces/interfaces";

let instance: any = null;

export default class StoreService {
    public choice: any;

    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }


    public addToStore(choice: any): void {
        this.choice = {...this.choice, ...choice};
    }

    public getStore(): IChoice {
        return this.choice;
    }
}