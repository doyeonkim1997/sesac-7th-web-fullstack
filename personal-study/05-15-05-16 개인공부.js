const movieList = [
  "인셉션",
  "라라랜드",
  "기생충",
  "이터널스",
  "스파이더맨: 노 웨이 홈",
];

const movieDetails = {
  "인셉션": { director: "크리스토퍼 놀란", likes: 99881 },
  "라라랜드": { director: "데이미언 셔젤", likes: 85740 },
  "기생충": { director: "봉준호", likes: 123999 },
  "이터널스": { director: "클로이 자오", likes: 70422 },
  "스파이더맨: 노 웨이 홈": { director: "존 왓츠", likes: 178392 },
};



1. const movieListElement = document.getElementById("movieList")
  2. for (let a = 0; a < movieList.length; a++) {
  3. const listItem = document.createElement("li")
  4. listItem.textContent = `${a + 1}. ${movieList[a]} - 감독: ${movieDetails[movieList[a]].director}`;
  5. listItem.classList.add("list-group-item");
  6. movieListElement.appendChild(listItem);
  }

// DOm 리스트 생성 마스터 로직 (JS로 ul > li 만들기) 
목표 설정
-> 데이터를 기반으로 ul > li 형태의 리스트를 만들고 싶음

  1. 리스트 가져오기
    -> HTML에 있는 <ul>또는 <ol> 가져오기
    -> 빈 리스트일 수도 있고, 비워도 됨

  2. 데이터가 배열에 있다면 반복문 사용

  3. 반복하면서 <li> 만들기
    -> HTML에 존재하지 않기 때문에 자바스크립트로 요소를 새로 만드는 것
  4. 텍스트 내용 채우기
  5. 스타일 클래스 추가하기 (부트스트랩 사용의 경우)
  6. 리스트에 붙이기 (하나씩 차례대로 붙는 개념)


//

🎯 실습 미션: 할 일 목록 만들기 (To-do List)
🧾 목표: 배열에 있는 할 일 목록을 화면에 출력한다
각 항목 옆에 "삭제" 버튼을 추가한다
버튼을 누르면 해당 할 일이 사라진다

const todoList = [
  "공부하기",
  "운동하기",
  "물 많이 마시기",
  "자바스크립트 복습하기",
  "산책 다녀오기"
];

const todoListElement = document.getElementById("todoList");
  for (let i = 0; i < todoList.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${i + 1}. ${todoList[i]}`;
    todoListElement.appendChild(listItem);
  }

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "삭제";
listItem.appendChild(deleteBtn);

deleteBtn.addEventListener("click", function () {
  listItem.remove();
}); 
