// interface GenericList<Type> {
//     [index: number]: Type;
// }
// let arrayList: GenericList<any>[];
// arrayList.push("String");
// arrayList.push();
var List = /** @class */ (function () {
    function List(item) {
        this.items = [];
        if (item) {
            this.items.push(item);
        }
    }
    List.prototype.add = function (item) {
        this.items.push(item);
    };
    List.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    List.prototype.find = function (item) {
        var index = this.items.indexOf(item);
        return index;
    };
    List.prototype.mainArray = function () {
        return this.items;
    };
    return List;
}());
var MainArray = new List();
MainArray.add(10);
MainArray.add(11);
MainArray.add(12);
MainArray.add(14);
MainArray.remove(11);
MainArray.remove(12);
MainArray.remove(14);
console.log(MainArray.mainArray());
console.log(MainArray.find(10));
