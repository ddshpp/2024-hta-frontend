function test01() {
  let arr01 = [];

  arr01 += parseInt(document.getElementById("test01_first").value);
  arr01 += parseInt(document.getElementById("test01_second").value);

  let result = "첫번째 입력 : " + arr01[0] + " 두번째 입력 : " + arr01[1];

  console.log('배열길이 : ' + arr01.length)
  console.log('[0] :' + arr01[0]);
  console.log('[1] :' + arr01[1]);

  return document.getElementById("test01_result").innerText = result;
}

function test02() {
  let number1 = parseInt(document.getElementById("test02_1").value);
  let number2 = parseInt(document.getElementById("test02_2").value);
  const arr2 = new Array(number1);

  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = new Array(number2);

    for (let j = 0; j < arr2[0].length; j++) {
      arr2[i][j] = i + ',' + j;
      console.log('(' + i + ',' + j + ') = ' + arr2[i][j])
    }
  }

  let result = arr2.length + "행 " + arr2[0].length + "열" + " 생성완료(로그확인)"
  return document.getElementById("test02_result").innerText = result;
}

function test03() {
  let score11 = parseInt(document.getElementById("test03_11").value);
  let score12 = parseInt(document.getElementById("test03_12").value);
  let score13 = parseInt(document.getElementById("test03_13").value);
  let score21 = parseInt(document.getElementById("test03_21").value);
  let score22 = parseInt(document.getElementById("test03_22").value);
  let score23 = parseInt(document.getElementById("test03_23").value);
  let score31 = parseInt(document.getElementById("test03_31").value);
  let score32 = parseInt(document.getElementById("test03_32").value);
  let score33 = parseInt(document.getElementById("test03_33").value);
  let score41 = parseInt(document.getElementById("test03_41").value);
  let score42 = parseInt(document.getElementById("test03_42").value);
  let score43 = parseInt(document.getElementById("test03_43").value);
  let score51 = parseInt(document.getElementById("test03_51").value);
  let score52 = parseInt(document.getElementById("test03_52").value);
  let score53 = parseInt(document.getElementById("test03_53").value);

  const arrTest03 = [
    [score11, score12, score13],
    [score21, score22, score23],
    [score31, score32, score33],
    [score41, score42, score43],
    [score51, score52, score53]
  ]

  let html = ''
  html += test04(arrTest03);

  return document.getElementById("test03_result").innerHTML = html;
}

function test04(arrTest03) {
  let result = '<table> <tr>';
  result += '<td> 번호 </td> <td> 국어 </td> <td> 영어 </td> <td> 수학 </td> <td> 총점 </td> <td> 평균 </td> </tr> ';

  for (let i = 0; i < arrTest03.length; i++) {
    let sum = arrTest03[i][0] + arrTest03[i][1] + arrTest03[i][2];
    let avg = (sum / 3);

    result += '<tr>' +
      '<td>' + (i + 1) + '</td>' +
      '<td>' + arrTest03[i][0] + '</td>' +
      '<td>' + arrTest03[i][1] + '</td>' +
      '<td>' + arrTest03[i][2] + '</td>' +
      '<td>' + sum + '</td>' +
      '<td>' + avg + '</td> </tr>'
  }

  let korTotal = 0;
  let engTotal = 0;
  let mathTotal = 0;

  for (let i = 0; i < arrTest03.length; i++) {
    korTotal += arrTest03[i][0];
    engTotal += arrTest03[i][1];
    mathTotal += arrTest03[i][2];
  }

  result += '<tr> <td>총점</td>  <td>' + korTotal + '</td>  <td>' + engTotal + '</td>  <td>' + mathTotal + '</td></tr></table>';
  return result;
}

function test05() {
  let number1 = parseInt(document.getElementById("test051").value);
  let number2 = parseInt(document.getElementById("test052").value);
  let number3 = parseInt(document.getElementById("test053").value);
  let number4 = parseInt(document.getElementById("test054").value);
  let number5 = parseInt(document.getElementById("test055").value);

  let arrTest05 = [
    number1, number2, number3, number4, number5
  ];

  arrTest05.sort(function (a, b) {
    return a - b;
  });

  return document.getElementById("test05_result").innerText = arrTest05[4].toString();
}

function test06() {
  let input = document.getElementById("test06").value;
  console.log('arguments[0] : ' + test07(input));
}

function test07(input) {
  return arguments[0];
}

function test08() {
  let input = document.getElementById("test08input").value;
  const split = input.split("");

  let result = function (split) {
    let result = '';

    for (let i = 0; i <= (split.length - 1); i++) {
      result += split[i] + '\n';
    }
    console.log(result);
  }

  return result(split);
}


function test09() {
  let input = document.getElementById("test09input").value;
  const split = input.split(" ");

  let result = "홀란드 : ";

  for (let i = 0; i <= split.length - 1; i++) {
    let temp = split[i]
    result += temp.charAt(0).toUpperCase();

    for (let j = 1; j < temp.length; j++) {
      result += temp.charAt(j);
    }
    result += " ";
  }

  return (document.getElementById("test09_result").innerText = result) +
    (document.getElementById("test09_result2").innerHTML = '<img src="../image/zzz002.jpeg" width="400">');
}

