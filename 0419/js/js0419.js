'use strict'

function test01() {
  let number1 = 10;
  console.log(number1);
}

function test02() {
  // number2 = 15;
  console.log(number2);
}

function test03() {
  let inputNumber = document.getElementById("switchTest").value;
  let result = test04(parseInt(inputNumber));

  console.log("돌린결롸 " + result);
  return document.getElementById("switchTestResult").innerText = result;
}

function test04(number) {
  console.log("test04에 들어온 숫자 : " + number);

  switch (true) {
    case number > 1000 :
      return "1000보다 크구나!";
    case number > 100 :
      return "100보다 크구나!"
    case number > 10 :
      return "10보다 크구나!"
    case number > 0 :
      return "0보다 크구나!"
    case number === 0 :
      return "0이구나!!!!!!!"
    case number < 0 :
      return "0보다 작구나!"
    default :
      return "-1";
  }
}

function test05() {
  let number = parseInt(document.getElementById("inputNumberTest05").value);

  if (isNaN(parseInt(number))) {
    return document.getElementById("inputNumberTest05Result").innerText = "숫자입력해라!!!!!!!!!!!";
  }
  if (number < 0) {
    return document.getElementById("inputNumberTest05Result").innerText = "양수 입력좀;;;;;"
  }

  let sum = 0;

  for (let i = 0; i <= number; i++) {
    if ((i % 2) === 0) {
      sum += i;
    }
  }

  return document.getElementById("inputNumberTest05Result").innerText = sum;
}

function test06() {
  let firstNumber = parseInt(document.getElementById("createTableNumber1").value);
  let secondNumber = parseInt(document.getElementById("createTableNumber2").value);

  document.write('<table class="table_1">');
  for (let i = 1; i <= firstNumber; i++) {
    document.write('<tr>')
    for (let j = 1; j <= secondNumber; j++) {
      document.write('<td>' + i + '행' + j + '열' + '</td>');
    }
    document.write('</tr> <br>')
  }
  document.write('<table>');
}

function star1() {
  let inputNumber = parseInt(document.getElementById("star_1").value);

  if (isNaN(inputNumber)) {
    return document.getElementById("star_1Result").innerText = "숫자입력해라~~~~"
  }

  let temp = 1;
  let result;

  for (let i = 1; i <= inputNumber; i++) {
    for (let j = 0; j < temp; j++) {
      result += "*";
    }
    result += "\n";
    temp++;
  }

  return document.getElementById("star_1Result").innerText = result;
}

function star2() {
  let inputNumber = parseInt(document.getElementById("star_2").value);

  if (isNaN(inputNumber)) {
    return document.getElementById("star_2Result").innerText = "숫자입력해라~~~~";
  }

  let temp = 0;
  let result = "";

  for (let i = 0; i <= inputNumber; i++) {
    if ((temp % 5) === 0) {
      for (let j = 0; j < temp; j++) {
        result += "*";
      }
      result += "\n";
    }
    temp++;
  }

  return document.getElementById("star_2Result").innerText = result;
}

function star3() {
  let inputNumber = parseInt(document.getElementById("star_3").value) / 5;
  console.log(inputNumber)

  if (isNaN(inputNumber)) {
    return document.getElementById("star_3Result").innerText = "숫자입력해라~~~~";
  }

  let count = 1;
  let flag = true;
  let star = "*****";
  let result = "";


  for (let i = 0; i < inputNumber; i++) {
    if (flag) {
      for (let j = 0; j < count; j++) {
        result += star;
      }
      // result += count + "\n";
      result += "\n";
      count++;
    }

    if (!flag) {
      for (let j = 0; j < 20 - (count % 20); j++) {
        result += star;
      }
      result += "\n";
      count++;
    }

    if (flag && (count % 21 === 0)) {
      flag = !flag;
    }

    if (!flag && (count % 20 === 19)) {
      flag = !flag;
      count = 1;
    }
  }


  return document.getElementById("star_3Result").innerText = result;

}

function test07() {

  let inputNumber = parseInt(document.getElementById("htmlTest").value);
  let count = 0;
  let html = '';

  html += '<table border "2">';

  while (count < inputNumber) {
    html += '<tr>';
    let count2 = 0;

    while (count2 <= count) {
      html += '<td>' + '*' + '</td>';
      count2++;
    }

    html += '</tr>';
    count++;
  }
  html += '</table>';

  return document.write(html);
}


function test08() {
  let inputNumber = parseInt(document.getElementById("gugugugu").value);
  let count = 0;
  let html = '';

  html += `<img src="../image/zz01.jpeg" width="1500">`;
  html += `<h1>` + inputNumber + '단!!!!!!!!!!!!!!!!!!!!!!!!!!' + `</h1>`;

  html += '<table border "1">';

  for (let i = 0; i <= inputNumber; i++) {
    html += '<tr>';
    if (i === 0) {
      html += '<td> </td>';

      for (let j = 1; j <= inputNumber; j++) {
        html += '<td align="center" style="padding: 5px">' + 'X' + j + '</td>';
      }
      html += '</tr>';
      continue;
    }

    for (let j = 0; j <= inputNumber; j++) {
      if (j === 0) {
        html += '<td align="center" style="padding: 5px">' + i + '단' + '</td>';
        continue;
      }
      html += '<td align="center" style="padding: 5px">' + i + ' X ' + j + ' = ' + (i * j) + '</td>';
    }
    html += '</tr>';
  }
  html += '</table>';

  return document.write(html);
}


function hyunTest() {
  let inputNumber = parseInt(document.getElementById("primeNumber").value);
  if (inputNumber < 0) {
    return document.getElementById("primeNumberResult").innerText = "장난치지마세요!!!!!!!!!!!!!!"
  }

  let result = "";

  for (let i = 1; i <= inputNumber; i++) {
    if (hyunTsst2(i)) {
      result += i + "\n";
    }
  }

  return document.getElementById("primeNumberResult").innerText = result;
}

function hyunTsst2(inputNumber) {
  if (inputNumber <= 1) {
    return document.getElementById("primeNumberResult").innerText = "소수없어요!!!!!!!!!!!!!!!";
  }

  if (inputNumber % 2 === 0) {
    if (inputNumber !== 2) {
      return false;
    }
    return true;
  }

  const sqrt = parseInt(Math.sqrt(inputNumber));

  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (inputNumber % divider === 0) {
      return false;
    }
  }
  return true;
}


