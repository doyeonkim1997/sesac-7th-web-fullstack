const div = document.querySelector('div'); // const div = document.getElementsByTagName('div')[0];
const span = document.querySelector('span'); // const span = document.getElementsByTagName('span')[0];

span.textContent = '맛없다 ㅡㅡ;;'; // span.innerText = '맛없다ㅡㅡ;;';
span.style.color = 'red';
span.style.fontWeight = '700';

/

const lis = document.querySelectorAll('li');

for (let li of lis) {
  li.classList.toggle('done');
  li.classList.toggle('todo');
}

/

const section = document.querySelector('section');
const icecreams = [
  '내가 아인슈페너?!',
  '엄마는 외계인',
  '민트 초콜릿 칩',
  '뉴욕 치즈케이크',
  '아이스 초당옥수수',
  '초콜릿 무스',
  '체리쥬빌레',
  '뮤! 넌 내거야',
  '오레오 쿠키 앤 크림',
];

for (let i = 0; i < icecreams.length; i++) {
  const img = document.createElement('img');
  img.setAttribute('src', `./image/icecream${i + 1}.png`);
  img.classList.add('img-box');

  const topN = document.createElement('h3');
  topN.textContent = `Top${i + 1}`;
  topN.classList.add('text-center');

  const name = document.createElement('div');
  name.textContent = icecreams[i];
  name.classList.add('text-center');

  const article = document.createElement('article');
  article.classList.add('article-box');
  article.append(img);
  article.append(topN);
  article.append(name);

  section.append(article);
}

/

const button = document.querySelector('button');
const h2 = document.querySelector('h2');

//  버튼을 "클릭"했을 때
button.addEventListener('click', function () {
  // red, green, blue 변수에 각각 0 ~ 255 범위의 랜덤한 숫자 생성
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  const newColor = `rgb(${r}, ${g}, ${b})`; // rgb(red, green, blue) 형태로 문자열을 newColor 변수에 저장하기

  document.body.style.backgroundColor = newColor; // 배경색 변경하기
  h2.innerText = newColor; // newColor 변수에 저장한 rgb() 컬러 코드를 h2의 내용(content)으로 바꾸기
});

/

const form = document.querySelector('form');
const list = document.querySelector('.comment-list');

// form 요소의 button을 클릭하여 폼을 "제출"했을 때,
form.addEventListener('submit', function (e) {
  e.preventDefault(); // 폼이 제출되고 새로고침 되는 것을 막음

  const userid = document.querySelector('input[name="userid"]'); // userid 폼 요소에 접근하기
  const comment = document.querySelector('input[name="comment"]'); // comment 폼 요소에 접근하기
  // const userid = form.elements.userid;
  // const comment = form.elements.comment;

  const newComment = document.createElement('li'); // li 태그를 생성하기
  newComment.innerHTML = `<b>${userid.value}</b> - ${comment.value}`; // 태그 내용으로 "Id - comment" 를 적어주기
  list.append(newComment); // .comment-list 요소에 위에서 만든 li 태그 추가하기

  userid.value = ''; // userid 입력창 초기화
  comment.value = ''; // comment 입력창 초기화
});


/

function cal() {
  let v1 = Number(document.getElementById('value1').value);
  let v2 = Number(document.getElementById('value2').value);
  let op = document.getElementById('operator').value;
  let result;

  if (op === '+') {
    result = v1 + v2;
  } else if (op === '-') {
    result = v1 - v2;
  } else if (op === '*') {
    result = v1 * v2;
  } else if (op === '/') {
    result = v1 / v2;
  } else {
    result = '오류 발생';
  }
  document.getElementById('result').value = result;
}

function resetInput() {
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
  document.getElementById('operator').value = '';
  document.getElementById('result').value = '';
}


/

function writeNote() {
  let name = document.getElementById('writer').value; // name input 값 가져오기
  let content = document.getElementById('content').value; // conent input 값 가져오기

  let table = document.getElementById('table'); // table 요소 선택
  let tr = document.createElement('tr'); // tr 생성 (td, td, td, td 넣기 위함)

  // 작성자 cell 만들기
  let tdWriter = document.createElement('td');
  tdWriter.innerText = name;

  // 내용 cell 만들기
  let tdContent = document.createElement('td');
  tdContent.innerText = content;

  // 작성일 cell 만들기
  let tdDate = document.createElement('td');
  let now = new Date();
  tdDate.innerText = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;

  // tr에 위에서 만든 3개의 td 추가
  tr.append(tdWriter, tdContent, tdDate);

  // table에 tr 추가
  table.append(tr);

  // input 창 초기화
  document.getElementById('writer').value = '';
  document.getElementById('content').value = '';
}


