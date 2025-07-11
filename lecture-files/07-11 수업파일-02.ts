

/** 도서관 관리 프로그램
 * TypeScript에서 배웠던 인터페이스, 타입 별칭, 그리고 타입 가드를 활용하여 온라인 도서관 관리 프로그램
 * 
 * 온라인 도서관 관리 프로그램은 다음과 같은 기능을 제공합니다:
 * - **도서 등록 기능** - 관리자 (Admin)
 * - **도서 삭제 기능** - 관리자 (Admin)
 * - **도서 대출 기능** - 사용자 (User)
 * - **도서 반납 기능** - 사용자 (User)
 * - **도서 검색/조회 기능**
 * - 관리자, 사용자 (제목, 저자, ISBN 등으로 검색)
 * - 회원 등록/조회 기능** - 관리자
 */






// 사용자 인터페이스 정의
// 사용자 id 예 : 'admin-001', 'user-123'
// 사용자 이름 : name
// 사용자 역할 : role


enum Role {
  admin = 'admin',
  regular = 'regular',
}

export interface User {
  id: string,
  name: string,
  role: Role; // 사용자 역할
} 

// 사용자 상태
export interface UserState {
  currentUser: User | null; // 현재 로그인한 사용자
  isAuthenticated: boolean; // 인증 여부
}

// 책 인터페이스 정의
export interface Book {
  isbn: string;
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
// 대출 기록 인터페이스 정의
export interface LoanRecord {
  loanId: string;
  bookIsbn: string;
  userId: string;
  loanDate: Date; // 'YYYY-MM-DD' 형식
  dueDate: Date; // 'YYYY-MM-DD' 형식
  returnDate?: Date; // 'YYYY-MM-DD' 형식, 반납하지 않은 경우 생략 가능
}

// 데이터 정의
// 도서 목록을 저장
let libraryBooks: Book[] = [];

// 회원 목록을 저장
let libraryUsers: User[] = [];

// 대출 기록을 저장
let loanRecords: LoanRecord[] = [];


// isAdmin 함수를 만들자
// 입력으로는 유저 정보를 받고 리턴 값으로 user의 role값을 준다.
// user의 role이 admin이면 true, 아니면 false를 반환한다.
export function isAdmin(user: User): boolean {
  return user.role === Role.admin;
}

// isRegularUser 함수를 만들자
export function isRegularUser(user: User): boolean {
  return user.role === Role.regular;
}



// 📚 도서 등록 함수 (addBook) 동작 원리
// 🎯 목적: 관리자 권한을 가진 사용자만 새로운 도서를 등록할 수 있는 기능

// 📝 처리 과정:

// 📍 권한 검증 (if (!isAdmin(user)))
// 사용자가 관리자인지 확인
// 관리자가 아니면 → "권한이 없습니다." 반환하고 종료

// 📍 중복 검증 (libraryBooks.some(b => b.isbn === book.isbn))
// ISBN 번호로 이미 등록된 책인지 확인
// 같은 ISBN이 있으면 → "이미 등록되어 있는 책입니다." 반환하고 종료

// 📍 도서 등록 (libraryBooks.push(book))
// 모든 검증을 통과하면 도서 목록에 추가
// "새로운 책이 등록되었습니다." 성공 메시지 반환
// 🔒 보안 특징: 2단계 검증으로 권한 없는 등록과 중복 등록을 방지하는 안전한 구조입니다.

export function addBook(user: User, book: Book): string {
  // user가 권한이 잇는지 확인하고
  if (!isAdmin(user)) {
    console.log("권한이 없습니다.");
    return 
  }
  
  // book 정보가 이미 등록되어 있는지 확인하고
  if (libraryBooks.some(b => b.isbn === book.isbn)) {
    console.log("이미 등록되어 있는 책입니다.");
    return 
  }
  // 없는 경우에만 추가
  libraryBooks.push(book);
}




// 📚 도서 제거 함수 (removeBook) 동작 원리

// Regular 유저 인지 체크
// 입력 받은 isbn이 도서 목록에 있는지 확인
// 없으면 -1 리턴
// 해당 도서가 대출 중이면 -1
// 해당 도서가 대출이 가능하면 해당 index값 리턴


export function removeBook(user: User, isbn: Pick<Book, 'isbn'>): void {
  // 1) 관리자인지 확인
  if (!isAdmin(user)) {
    console.log("권한이 없습니다.");
    return 
  }
  
  // 2) 도서 목록에 있는지 확인
  const index = libraryBooks.findIndex(book => book.isbn === isbn.isbn);
  if (Index === -1) {
    console.log(`ISBN ${isbn}인 도서 목록에 없는 책입니다.`);
    return;
  }

   // 3) 대출 진행 - 대출 중인 책은 제거할 수 없음
  if(libraryBooks[index].isAvailable) {
  console.log(`해당 도서가 대출 중입니다.`);
  }

  // 4) 삭제
  libraryBooks.splice(index, 1);
  console.log(`도서 '${removeBook.title}' (ISBN: ${isbn})인 도서가 제거되었습니다.`);

}


// 📚 도서 대출 가능 여부 확인 함수 (borrowBook) 동작 원리
// 🎯 목적: 일반 사용자가 도서를 대출할 수 있는지 확인하는 기능

// 📝 처리 과정:
// 1️⃣ 사용자 권한 검증 (if (!isRegularUser(user)))
//    - 일반 사용자인지 확인
//    - 일반 사용자가 아니면 -1 반환

// 2️⃣ 도서 존재 여부 확인 (findIndex)
//    - ISBN으로 도서 검색
//    - 도서가 없으면 -1 반환

// 3️⃣ 도서 대출 가능 상태 확인 (isAvailable)
//    - 도서가 대출 가능한 상태인지 확인
//    - 이미 대출 중이면 -1 반환

// 4️⃣ 대출 가능 시 도서의 인덱스 반환
//    - 모든 검증을 통과하면 해당 도서의 인덱스 반환
//    - 이 인덱스는 실제 대출 처리에 사용됨

// 🔒 반환 값:
// - 성공: 도서의 배열 인덱스 (0 이상의 정수)
// - 실패: -1


export function borrowBook(user: User, isbn: string) : number | -1 {
  // Regular 유저 인지 체크
  if (!isRegularUser(user)) {
    console.log("권한이 없습니다.");
    return -1;
  }

  // 입력 받은 isbn이 도서 목록에 있는지 확인
  const index = libraryBooks.findIndex(book => book.isbn === isbn);
  if (index === -1) {
    console.log(`ISBN ${isbn}인 도서 목록에 없는 책입니다.`);
    return -1;
  }

  // 해당 도서가 대출 중이면 -1
  if (libraryBooks[index].isAvailable) {
    console.log(`해당 도서 '${libraryBooks[index].title}'은 대출 중입니다.`);
    return -1;
  }

  // 해당 도서가 대출이 가능하면 해당 index값 리턴
  return index;
}



// 회원 등록
// 최고 관리자가 있는 상태에서 일반 사용자를 등록할 수 있다.
// 중복 검사

function registerUser(
  user: User,
  {
  id,
  name
  role,
} : User


)

// 관리자인지 확인
if (!isAdmin(user)) {
  console.log("권한이 없습니다.");
  return;
}

// 유저 리스트에 존재하는지 확인
if (libraryUsers.some(u => u.id === newUser.id)) {
  console.log("이미 등록되어 있는 사용자입니다.");
  return;
}

// 새로운 유저 추가
const newUser: User = {
  id : newUserId,
  name: newUserName,
  role: newUserRole,

}

libraryUsers.push(newUser);
console.log(`새로운 사용자 '${newUser.name}'이(가) 등록되었습니다.`);










// * - **도서 검색/조회 기능**
// - 관리자, 사용자 (제목, 저자, ISBN 등으로 검색)
// - 회원 등록/조회 기능** - 관리자
// - 사용자 등록/조회 기능** - 관리자
export function searchBooks(query: string): Book[] {
  // 제목, 저자, ISBN으로 검색
  return libraryBooks.filter(book => 
    book.title.includes(query) || 
    book.author.includes(query) || 
    book.isbn.includes(query)
  );
}

export function searchUsers(query: string): User[] {
  // 사용자 이름 또는 ID로 검색
  return libraryUsers.filter(user => 
    user.name.includes(query) || 
    user.id.includes(query)
  );
}
