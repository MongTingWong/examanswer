var Member = /** @class */ (function () {
    function Member() {
    }
    return Member;
}());
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    return Inventory;
}());
var Officer = /** @class */ (function () {
    function Officer() {
        Inventory.totalBooks = ["A", "B", "C", "D", "E", "F", "I", "J"];
        Inventory.totalMovies = ["A", "B", "C", "D", "E", "F", "I", "J"];
        Inventory.totalGames = ["A", "B", "C", "D", "E", "F", "I", "J"];
        Inventory.availBooks = Inventory.totalBooks;
    }
    return Officer;
}());
var Librarian = /** @class */ (function () {
    function Librarian() {
    }
    Librarian.prototype.trackMemberID = function (member, Name, bookgamemovie) {
        if (Inventory.memberTrack[member.memberId] != false) {
            if (bookgamemovie == 1) {
                member.borrowedBookList.push(Name);
                console.log("you have borrowed: " + Name);
            }
            if (bookgamemovie == 2) {
                member.borrowedGameList.push(Name);
                console.log("you have borrowed: " + Name);
            }
            if (bookgamemovie == 3) {
                member.borrowedGameList.push(Name);
                console.log("you have borrowed: " + Name);
            }
        }
        else {
            console.log("You can not borrow");
        }
        if (member.borrowedBookList.length >= 4) {
            Inventory.memberTrack[member.memberId] = false;
        }
    };
    return Librarian;
}());
var MainClass = /** @class */ (function () {
    function MainClass() {
        this.officer = new Officer();
        this.librarian = new Librarian();
    }
    MainClass.prototype.lendBooks = function (member, BookName) {
        this.librarian.trackMemberID(member, BookName, 1);
    };
    MainClass.prototype.lendGames = function (member, GameName) {
        this.librarian.trackMemberID(member, GameName, 2);
    };
    MainClass.prototype.lendMovies = function (member, MoviesName) {
        this.librarian.trackMemberID(member, MoviesName, 3);
    };
    return MainClass;
}());
