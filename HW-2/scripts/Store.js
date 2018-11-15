let instance = null;

class Store{

    constructor(){
        if(!instance){
            instance = this;
        }
        this.choice={};

        return instance;
    }
addToStore(choice){
        this.choice={...this.choice,...choice};
}
getStore(){
        return this.choice;
}
}
window.Store = Store;