let instance = null;

class StoreService{

    constructor(){
        if(!instance){
            instance = this;
        }

        return instance;
    }
    static choice={};

    static addToStore(choice){
        StoreService.choice={... StoreService.choice,...choice};
    }
    static getStore(){
        return StoreService.choice;
    }
}