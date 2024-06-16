function test01() {
  let result = document.getElementById("test01").value;
  return document.getElementById("test01_Result").innerText = result;
}

function test02() {
  let elementById = document.getElementById("test02_Result");

  let html = '<div>' + elementById
    .innerHTML;
  let result = document.getElementById("test02").value;
  html += result + '</div>';

  return document.getElementById("test02_Result").innerHTML = html;
}

function test03() {
  let firstNumber = parseInt(document.getElementById("test03_firstInputNumber").value);
  let secondNumber = parseInt(document.getElementById("test03_SecondInputNumber").value);
  let result = firstNumber + secondNumber

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return document.getElementById("test03_result").innerText = "입력 대기중~";
  }

  return document.getElementById("test03_result").innerText = result.toString();
}

function test04() {
  let number = parseInt(document.getElementById("test04").value);
  let evenNumber = "짝수"
  let oddNumber = "홀수"

  if (number % 2 === 0) {
    return document.getElementById("test04_Result").innerText = evenNumber
  }
  return document.getElementById("test04_Result").innerText = oddNumber;
}


function test06(firstNumber, secondNumber, thirdNumber) {
  let result = Number.MIN_VALUE;

  if (firstNumber >= result) {
    result = firstNumber;
  }
  if (secondNumber >= result) {
    result = secondNumber;
  }
  if (thirdNumber >= result) {
    result = thirdNumber;
  }

  return result;
}

function test05() {
  let firstNumber = parseInt(document.getElementById("test05_firstNumber").value);
  let secondNumber = parseInt(document.getElementById("test05_secondNumber").value);
  let thirdNumber = parseInt(document.getElementById("test05_thirdNumber").value);

  let result = test06(firstNumber, secondNumber, thirdNumber);
  return document.getElementById("test05_Result").innerText = result.toString();
}

function test07() {
  let inputNumber = parseInt(document.getElementById("test07").value);
  let columns = parseInt(document.getElementById("test07_2").value);

  let html = `<img src="../image/zz03.jpeg" width="1200" alt="왜안나올까">`
  html += '<table>';
  let count = 0;
  html += '<tr>';

  for (let i = 1; i <= inputNumber; i++) {
    html += test08(i);
    count++;

    if ((count % columns === 0) && count !== inputNumber) {
      html += '</tr> <tr>';
    } else if (count === inputNumber) {
      html += '</tr>'
    }
  }

  html += '</table>';
  return document.getElementById("test07_Result").innerHTML = html;
}

function test08(number) {
  let html = '<td>';
  for (let i = 1; i < 10; i++) {
    html += '<ul>' + number + ' X ' + i + ' = ' + (number * i) + '</ul>';
  }
  html += '</td>';

  return html;
}

function test09() {
  let result = "테스트9";
  console.log(result)
  return document.getElementById("test09_Result").innerText = result;
}

// TODO : 익명함수
const test10 = function () {
  let result = "테스트10";
  console.log(result);
  return document.getElementById("test10_Result").innerText = result;
}


const test11 = function () {
  // 상수형태
  console.log('하이하이');
}


// TODO : 콜백함수
const test12 = function (data) {
  // data() - 함수형태 자료형
  data();
}

const test13 = function () {
  return 100;
}

const test14 = function () {
  return function () {
    console.log('테스트14');
  }
}

// TODO : 요거 다시 해보자~!!
function test15() {
  console.log(test13());
  console.log(test14);
  const result = test14();
  result();
}

function test16() {
  const testFunction1 = function (type) {

    if (type === 1) {
      console.log('안녕~!')
      return function () {
        console.log('1번');
      }
    } else {
      console.log('안녕~!!!')
      return function () {
        console.log('2번')
      }
    }
  }

  //TODO : 아래 차이점 잘 정리하자~!
  testFunction1(1);
  testFunction1(2)();
}

function test17() {
  const testFunction1 = function () {
    console.log('testFunction1 호출됨~!');

    return testFunction2 = function () {
      console.log('testFunction2 호출됨~!');

      return testFunction3 = function (type) {
        console.log('testFunction3 호출됨~!');
      }
    }
  }

  const testFunction4 = (type) => {
    console.log('깔깔깔');
  }
  const testFunction5 = (data) => {
    console.log('깔깔깔' + data);
  }

  const testFunction6 = (type) => console.log('우헤헤헤')

  // testFunction1();
  // testFunction4();
  // testFunction4();
  // testFunction5(100);

  testFunction1()()();
}

const test18 = function () {
  let firstInput = parseInt(document.getElementById("firstInput").value);
  let secondInput = document.getElementById("secondInput").value.toString();
  let thirdInput = parseInt(document.getElementById("thirdInput").value);

  if (isNaN(firstInput) || isNaN(thirdInput) || !isNaN(secondInput)) {
    return document.getElementById("test18_Result").innerText = "잘좀입력하셈!!"
  }

  let result = 0;

  switch (true) {
    case (secondInput === "+") :
      result = firstInput + thirdInput;
      break;
    case (secondInput === "-") :
      result = firstInput - thirdInput;
      break;
    case (secondInput === "*") :
      result = firstInput * thirdInput;
      break;
    case (secondInput === "/") :
      result = firstInput / thirdInput;
      break;
    default :
      return (document.getElementById("test18_Result").innerText = "나는 원한다 올바른 입력, 당신에게 갈 것 굉장한 고통")
      (document.getElementById("test18_Result2").innerHTML = '<img src="../image/zz04.jpeg" width="400px" alt="왜안나오니">');
  }

  return (document.getElementById("test18_Result").innerText = "정답은 " + result + " 입니다")
  (document.getElementById("test18_Result2").innerHTML = '<img src="../image/zz03.jpeg" width="400px" alt="왜안나오니">');
}

function test20() {
  return alert("왜!!!!!");
}

function test21() {
  let result = confirm("안녕 나는 홀란드야");

  if (result) {
    return alert("반가워ㅎ");
  }
  return alert("안반가워!!");
}

function test22() {
  let result = prompt("홀란드에게 인사를 해주세요~!", '입력해주세요');
  if (result.length > 30) {
    return alert("생각보다 말이 많은 친구구나.");
  }
  return alert("홀란드 : 널 보고싶구나!!!");
}

function test23() {
  let inputNumber = parseInt(prompt("홀란드 : 나는 잘한다 구구단 당신보다ㅎ 그리고 원한다 아무 숫자. 너는 절망하게될것"));

  if (isNaN(inputNumber)) {
    return alert("당신은 초등학교를 안나왔습니까?")
  }

  test24(inputNumber);
}

function test24(inputNumber) {
  let result = "";

  for (let i = 1; i < 10; i++) {
    result += inputNumber + " X " + i + " = " + (i * inputNumber) + "\n";
  }
  result += "홀란드 : 너무 쉽다 너무 쉬워"

  return alert(result);
}

const test25 = function () {
  setTimeout(test26, 3000);
}

const test26 = function () {
  return console.log("홀란드 : ㅎㅇㅎㅇ");
}

function test27() {
  let input = document.getElementById("test27").value;

  console.log("입력값 : " + input);
  return document.getElementById("test27_Result").innerText = eval(input);
}
