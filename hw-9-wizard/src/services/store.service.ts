let instance = null;

export default class StoreService {

    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    public choice = {};

    public addToStore(choice): void {
        StoreService.choice = {...StoreService.choice, ...choice};
    }

    public getStore() {
        return StoreService.choice;
    }
}