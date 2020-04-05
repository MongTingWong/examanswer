class Member {
    memberId: number;
    name: string;
    borrowedBookList: string[];
    borrowedGameList: string[];
    borrowedMovieList: string[];
}

interface MemberTrueOrFalse {
    [index: string]: boolean;
}
  
class Inventory {
    public static totalBooks: string[];
    public static availBooks: string[];
    public static totalMovies: string[];
    public static availMovies: string[];
    public static totalGames: string[];
    public static availGames: string[];
    public static memberTrack: MemberTrueOrFalse;
}
    
class Officer {
    constructor() {
      Inventory.totalBooks = ["A","B","C","D","E","F","I","J"];
      Inventory.totalMovies = ["A","B","C","D","E","F","I","J"];
      Inventory.totalGames = ["A","B","C","D","E","F","I","J"];
      Inventory.availBooks = Inventory.totalBooks;
    }
  }
  
class Librarian {
    trackMemberID(member: Member, Name: string, bookgamemovie: number) {
      if (Inventory.memberTrack[member.memberId] != false) {
        if(bookgamemovie == 1){
            member.borrowedBookList.push(Name);
            console.log("you have borrowed: " + Name);
        }
        if(bookgamemovie == 2){
            member.borrowedGameList.push(Name);
            console.log("you have borrowed: " + Name);
        }
        if(bookgamemovie == 3){
            member.borrowedGameList.push(Name);
            console.log("you have borrowed: " + Name);
        }
        
      } else {
        console.log("You can not borrow");
      }
  
      if (member.borrowedBookList.length >= 4) {
        Inventory.memberTrack[member.memberId] = false;
      }
    }
}
  
class MainClass {
    officer;
    librarian;
    constructor() {
      this.officer = new Officer();
      this.librarian = new Librarian();
    }
  
    lendBooks(member: Member, BookName: string) {
      this.librarian.trackMemberID(member, BookName,1);
    }

    lendGames(member: Member, GameName: string){
        this.librarian.trackMemberID(member, GameName,2);
    }

    lendMovies(member: Member, MoviesName: string){
        this.librarian.trackMemberID(member, MoviesName,3);
    }
}