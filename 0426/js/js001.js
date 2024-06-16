test26_01 = function () {
  console.log("테스트 성공~!")
}

test26_02 = function () {
  let result = "1000만원 받으셈!!"
  console.log(document.getElementsByTagName('button01'))
  console.log(document.querySelector('.button01'));
  return document.getElementById("test26_02_result").innerText = result;
}

test26_03 = function () {
  let divTest = document.getElementById("test26_03");
  console.log(divTest.innerText);
  console.log(divTest.innerHTML);
  console.log(divTest.textContent);
}

test26_04 = function () {
  let firstNumber = parseInt(document.getElementById("test26_04_firstInput").value);
  let secondNumber = parseInt(document.getElementById("test26_04_secondInput").value);
  let result = test26_05(firstNumber, secondNumber)

  return document.getElementById("test04_result").innerHTML = result;
}

test26_05 = function (firstNumber, secondNumber) {
  let html = '<table>';

  for (let i = 1; i <= firstNumber; i++) {
    html += '<tr>';
    for (let j = 1; j <= secondNumber; j++) {
      html += '<td>' + i + ' X ' + j + ' = ' + (i * j) + '</td>';
    }
    html += '</tr>'
  }
  html += '</table>';

  return html;
}

function test26_07(setYear) {
  const temp = new Date(setYear);
  temp.setDate(31);
  let count = parseInt(temp.getDate().toString());
  let dayCount = 0;

  if (count === 31) {
    dayCount = 31;
  } else if (count === 1) {
    dayCount = 30;
  } else if (count === 2) {
    dayCount = 29;
  } else if (count === 3) {
    dayCount = 28;
  }

  return dayCount;
}

test26_06 = function () {
  let selectYearIndex = document.getElementById("test26_06_year").options.selectedIndex;
  let selectYearValue = parseInt(document.getElementById("test26_06_year").options[selectYearIndex].value);
  let selectMonth = document.getElementById("test26_06_month").options.selectedIndex;
  // console.log('선택 년 : ' + selectYearValue)
  // console.log('선택 월 : ' + selectMonth)

  //객체를 하나 생성하여, 선택한 년도와 월로 객체에 날짜 셋팅
  const findDate = new Date();
  findDate.setFullYear(selectYearValue, selectMonth, 1);

  //조회날짜의 시작 요일 구하기
  let startDayOfWeek = findDate.getDay();
  // console.log('선택한 월 1일자 요일? : ' + startDayOfWeek)

  //조회날짜 일수구하기
  let dayCount = test26_07(findDate);

  const createCalender = test26_08(findDate, startDayOfWeek, dayCount);
  return document.getElementById("test26_06_result").innerHTML = createCalender;
}

function test26_08(findDate, startDayOfWeek, dayCount) {
  // console.log('findDate : ' + findDate + '\n' +
  //   'startDayOfWeek : ' + startDayOfWeek + '\n' +
  //   'dayCount : ' + dayCount
  // )
  let lineCount = (startDayOfWeek + dayCount) / 7;

  let html = '<table>'
  let inputDayCount = 1;
  html += test26_09();

  html += '<tr>';
  for (let i = 0; i < 7; i++) {
    if (i < startDayOfWeek) {
      html += '<td> </td>'
      continue;
    } else {
      html += '<td>' + inputDayCount + '</td>'
      inputDayCount++;
    }
  }
  html += '</tr>'

  for (let i = 1; i < lineCount; i++) {
    html += '<tr>'
    for (let j = 0; j < 7; j++) {
      if (inputDayCount <= dayCount) {
        html += '<td>' + inputDayCount + '</td>'
        inputDayCount++;
      } else {
        html += '<td> </td>';
      }
    }
    html += '</tr>'
  }
  html += '</table>';

  return html;
}

test26_09 = function () {
  let html = '<tr>' +
    '<td>' + ' 일 ' + '</td>' +
    '<td>' + ' 월 ' + '</td>' +
    '<td>' + ' 화 ' + '</td>' +
    '<td>' + ' 수 ' + '</td>' +
    '<td>' + ' 목 ' + '</td>' +
    '<td>' + ' 금 ' + '</td>' +
    '<td>' + ' 토 ' + '</td>' +
    '</tr>';

  return html;
}

test26_10 = function () {
  // return document.getElementById("test26_10_result").innerHTML = '<h1> 만들었지롱!!!!!</h1>'+'<img src="../../images/h08.jpeg" width="500">'
  return document.getElementById("test26_10_result").innerHTML = '<div class="h001"> 만들었지롱!!!!! </div>'
}


function test26_14() {
  const setNumbers = new Set;

  while (setNumbers.size < 3) {
    setNumbers.add(parseInt(Math.random() * 9) + 1);
  }

  console.log(setNumbers.size)
  return Array.from(setNumbers);
}

//정답생성해주세요
test26_11 = function () {
  const arrayNumbers = test26_14();
  // console.log(ArrayNumbers.length)


  //정답 몰래 보여주기
  test26_13 = function () {
    let number_1 = arrayNumbers[0].toString();
    let number_2 = arrayNumbers[1].toString();
    let number_3 = arrayNumbers[2].toString();

    let result = number_1 + ',' + +number_2 + ',' + number_3;
    return document.getElementById("test26_13_result").innerText = result;
  }

  test26_15 = function () {
    let inputNumber_1 = parseInt(document.getElementById("test26_11_firstInput").value);
    let inputNumber_2 = parseInt(document.getElementById("test26_11_secondInput").value);
    let inputNumber_3 = parseInt(document.getElementById("test26_11_thirdInput").value);

    let ball = 0;
    let strike = 0;

    if (arrayNumbers.includes(inputNumber_1)) {
      if (arrayNumbers[0] === inputNumber_1) {
        strike++;
      } else {
        ball++
      }
    }
    if (arrayNumbers.includes(inputNumber_2)) {
      if (arrayNumbers[1] === inputNumber_2) {
        strike++;
      } else {
        ball++
      }
    }
    if (arrayNumbers.includes(inputNumber_3)) {
      if (arrayNumbers[2] === inputNumber_3) {
        strike++;
      } else {
        ball++
      }
    }

    if (strike === 3) {
      return document.getElementById("test26_15_result").innerHTML = '<div class="h001"> 3스트라이크!!!!!!! </div>'
    }

    if (ball === 0 && strike === 0) {
      return document.getElementById("test26_15_result").innerHTML = '<div class="h002"> ... </div>'
    }

    let result = ball + ' 볼 ' + strike + '스트라이크'
    return document.getElementById("test26_15_result").innerText = result
  }
}
