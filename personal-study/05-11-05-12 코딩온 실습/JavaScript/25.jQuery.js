function changeImg(name) {
  // img의 src 속성을 변경해주는 함수
  // name: apple or banana or grape or peach
  $('img').attr('src', `./img/${name}.png`);
}

/

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function changeColor() {
  // 1번 방안
  // if($('div').hasClass('red'))
  //     $('div').switchClass('red', 'orange');
  // else if($('div').hasClass('orange'))
  //     $('div').switchClass('orange', 'yellow');
  // // 등등
  // else if($('div').hasClass('purple'))
  //     $('div').switchClass('purple', 'red');

  // 2번 방안
  let nowClass = $('div').attr('class'); // 현재 클래스 값 가져오기
  let i = colors.indexOf(nowClass); // 0 ~ 5

  // purple 일 때
  if (i == colors.length - 1) $('div').switchClass(nowClass, colors[0]);
  else $('div').switchClass(nowClass, colors[i + 1]);
}


/

<html>
  <head>
    <meta charset="UTF-8" />
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.5.0.min.js"
    ></script>
    <title>내 스케줄</title>
    <style>
      td {
        width: 100px;
        height: 100px;
        color: black;
      }
      tr > td:first-child,
      tr > th:first-child {
        color: red;
      }
      tr > td:last-child,
      tr > th:last-child {
        color: blue;
      }
      td > p:hover {
        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <div>
      날짜 : <input type="text" id="date" readonly /> <br />
      내용 : <input type="text" id="content" /> <br />
      <button type="button" onclick="writeSchedule();">작성</button> <br />
    </div>
    <div style="font-size: 2em; color: green; text-align: center">
      2022년 7월
    </div>

    <br />

    <table align="center" width="500" style="text-align: center">
      <tr>
        <th>日</th>
        <th>月</th>
        <th>火</th>
        <th>水</th>
        <th>木</th>
        <th>金</th>
        <th>土</th>
      </tr>
      <tr>
        <td><p></p></td>
        <td><p></p></td>
        <td><p></p></td>
        <td><p></p></td>
        <td><p></p></td>
        <td><p>1</p></td>
        <td><p>2</p></td>
      </tr>

      <tr>
        <td><p>3</p></td>
        <td><p>4</p></td>
        <td><p>5</p></td>
        <td><p>6</p></td>
        <td><p>7</p></td>
        <td><p>8</p></td>
        <td><p>9</p></td>
      </tr>
      <tr>
        <td><p>10</p></td>
        <td><p>11</p></td>
        <td><p>12</p></td>
        <td><p>13</p></td>
        <td><p>14</p></td>
        <td><p>15</p></td>
        <td><p>16</p></td>
      </tr>
      <tr>
        <td><p>17</p></td>
        <td><p>18</p></td>
        <td><p>19</p></td>
        <td><p>20</p></td>
        <td><p>21</p></td>
        <td><p>22</p></td>
        <td><p>23</p></td>
      </tr>
      <tr>
        <td><p>24</p></td>
        <td><p>25</p></td>
        <td><p>26</p></td>
        <td><p>27</p></td>
        <td><p>28</p></td>
        <td><p>29</p></td>
        <td><p>30</p></td>
      </tr>
      <tr>
        <td><p>31</p></td>
        <td><p></p></td>
        <td><p></p></td>
        <td><p></p></td>
        <td><p></p></td>
        <td><p></p></td>
        <td><p></p></td>
      </tr>
    </table>

    <script>
      // this를 기억하기 위한 전역변수
      let target;

      $('td > p').on('click', function () {
        console.log(this);
        // 날짜만 가져오려면 this의 text값을 가져와야 함
        console.log($(this).text());

        // 날짜, 내용 input 선택
        // let date = $(this).text();
        $('#date').val($(this).text());

        // target에 this 기억해두기
        target = this;
      });

      function writeSchedule() {
        let content = $('#content').val();

        // 요소 추가
        $(target)
          .parent()
          .append('<span>' + content + '</span><br />');
        // $(target.parentNode).append(~~)

        // 초기화
        $('#content').val('');
        $('#date').val('');
      }
    </script>
  </body>
</html>

/

