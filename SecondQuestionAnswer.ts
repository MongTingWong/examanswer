
class List<T> {
    private items: T[];


    constructor(item?: T) {
        this.items = [];
        if(item) {
            this.items.push(item);
        } 
    }

    add(item: T) {
        this.items.push(item);
    }

    remove(item: T) {
        let index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    find(item: T){
        let index = this.items.indexOf(item);
        return index;
    }

    mainArray() {
        return this.items;
    }

}

let  MainArray = new List<number>();

MainArray.add(10)
MainArray.add(11)
MainArray.add(12)
MainArray.add(14)
MainArray.remove(11)
MainArray.remove(12)
MainArray.remove(14)

console.log(MainArray.mainArray())
console.log(MainArray.find(10))