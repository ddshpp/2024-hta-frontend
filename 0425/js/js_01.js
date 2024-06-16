function test_01() {
  const setTest = new Set;
  console.log('test_01 실행됨~!')

  addData = function () {
    setTest.add(document.getElementById("inputData").value);
    getSetDate();
  }

  getSetDate = function () {
    setTest.forEach(function (data) {
      console.log(data);
    })
  }
}

function test_02() {
  const setTest = new Set;

  function1 = function () {
    console.log('test1')
  }
  function2 = function () {
    console.log('test2')
  }

  setTest.add(function1).add(function2);

  function3 = function () {
    setTest.forEach(function (data) {
      console.log(data)
    })
  }
}

function test_03() {
  const setLotto = new Set;
  // let count = 0;

  while (setLotto.size < 6) {
    setLotto.add(parseInt(Math.random() * 45) + 1);

    //중복제거 체크
    // count++;
    // console.log('랜덤숫자생성 횟수 : ' + count + ' \n 당첨번호 수 : ' + setLotto.size);
  }

  return Array.from(setLotto);
}

function test_04() {
  let html = '<table>';

  for (let i = 0; i < 5; i++) {
    html += '<tr>';
    html += '<td>' + (i + 1) + '회' + '</td>';

    const array = test_03();

    for (let j = 0; j < 6; j++) {
      html += '<td>' + array[j] + '</td>';
    }
    html += '</tr>';
  }

  html += '</table>';
  return document.getElementById("test04_result").innerHTML = html;
}

function test_05() {
  const mapTest = new Map;
  mapTest.set(1, '하이하이');
  console.log('key : 1 \nvalue : ' + mapTest.get(1) + '\n' + 'map.size : ' + mapTest.size);

  mapTest.set(2, '하이하이22');
  console.log('key : 2 \nvalue : ' + mapTest.get(2) + '\n' + 'map.size : ' + mapTest.size);

  mapTest.set(1, '하이하이333');
  console.log('key : 1 \nvalue : ' + mapTest.get(1) + '\n' + 'map.size : ' + mapTest.size);

  test_06 = function () {
    console.log(mapTest);
  }
}

function test_07() {
  const mapTest = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 13, value: 30}
  ]

  console.log(mapTest);
  console.log('mapTest[0][\'key\'] : ' + mapTest[0]['key']);
  console.log('mapTest[0][\'value\'] : ' + mapTest[0]['value']);
}

function test_08() {
  const mapTest = new Map;
  mapTest.set(1, '흰수염');
  mapTest.set(2, '검은수염');
  mapTest.set(3, '갈색수염');
  mapTest.set(4, '노란수염');

  test_09 = function () {
    console.log(mapTest.has(1))
    console.log(mapTest.has(2))
    console.log(mapTest.has(3))
    console.log(mapTest.has(4))
    console.log(mapTest.has(5))
  }

  test_10 = function () {
    for (let key of mapTest) {
      console.log(key);
    }
  }

  test_11 = function () {
    for (let value of mapTest.values()) {
      console.log(value);
    }
  }

  test_12 = function () {
    mapTest.clear()
    console.log(mapTest.size);
  }
}

function test_13() {
  alert('하!이!')
}

function test_14() {
  window.alert('하!이!')
}

function test_15() {
  let url01 = 'https://www.google.com/search?sca_esv=40c8a0742f288946&sca_upv=1&q=%EB%AF%B8%EB%82%A8+%ED%99%80%EB%9E%80%EB%93%9C&udm=2'
  let option = 'width=600,height=600'
  openUrl = open(url01, '미남', option);
}

test_16 = function () {
  // setTimeout(test_15, 5000);
  setTimeout(test_15, 5000);
}

test_17 = function () {
  console.log('screen.width : ' + screen.width);
  console.log('screen.availWidth : ' + screen.availWidth);
  console.log('screen.height : ' + screen.height);

  //작업표시줄의 제거
  console.log('screen.availHeight : ' + screen.availHeight);
}

test_18 = function () {
  let url01 = '../image/zzz005.jpeg'
  let newUrlHeight = 600;
  let newUrlWidth = 600;
  let screenWidth = screen.width;
  let screenHeight = screen.height;
  let centerTop = (screenHeight / 2) - (newUrlHeight / 2)
  let centerLeft = (screenWidth / 2) - (newUrlWidth / 2)
  let option = 'width=' + newUrlWidth + ', height=' + newUrlHeight + ', left =' + centerLeft + ', top =' + centerTop;

  openUrl = open(url01, '미남', option)
}

test_19 = function () {
  console.log('location.href : ' + location.href);
  console.log('location.host : ' + location.host);
  console.log('location.pathname : ' + location.pathname);
  console.log('location.protocol : ' + location.protocol);
}

test_20 = function () {
  location.href = 'https://www.google.com'
}

test_21 = function () {
  location.href = 'https://www.naver.com/'
}

test_22 = function () {
  location.href = 'https://www.jhta.co.kr/main'
}

test_23 = function () {
  history.back();
}

test_24 = function () {
  history.go(-1);
}

test_25 = function () {
  console.log(navigator.appName);
  console.log(navigator.appCodeName);
  console.log(navigator.userAgent);
  console.log(navigator.platform);
}

test_26 = function () {
  document.bgColor = prompt('배경색입력', 'blue');
}

test_27 = function () {
  console.log(document.forms);
  console.log(document.forms[0]);
  console.log(document.form1.action);
  console.log(document.form2.action);
  console.log(document.form3.action);
}

tt01 = function () {
  let number1 = parseInt(document.getElementById("tt1").value);
  let number2 = parseInt(document.getElementById("tt2").value);
  let sum = (number1 + number2);
  let result = sum + "입니다!!!!!!!!!"

  document.body.style.background = 'url("../image/zzz005.jpeg")';
  document.body.style.backgroundSize = "100px"
  return document.getElementById("tt01_result").innerText = result;
}

tt02 = function () {
  const check1 = document.getElementById("tt021").checked;
  const check2 = document.getElementById("tt022").checked;
  const check3 = document.getElementById("tt023").checked;

  if (check1 && check2 && check3) {
    let result = "야호!!!!!!!!!!!!!!!!!!!!!!!!!!!"

    document.body.style.background = 'url("../image/zzz005.jpeg")';
    document.body.style.backgroundSize = "100px"
    return document.getElementById("tt02_result").innerText = result;
  } else {
    return document.getElementById("tt02_result").innerText = "으악!!!";
  }
}

tt03 = function () {
  const selectedIndex = document.getElementById("tt03_list").options.selectedIndex;
  const selectedIndexText = document.getElementById("tt03_list").options[selectedIndex].text;
  const selectedIndexValue = document.getElementById("tt03_list").options[selectedIndex].value;
  console.log('selectedIndex : ' + selectedIndex);
  console.log('selectedIndexText : ' + selectedIndexText);
  console.log('selectedIndexValue : ' + selectedIndexValue);
}

tt04 = function () {
  document.getElementById("tt03_list").options.selectedIndex = 3;
}

tt05 = function () {
  let number1 = parseInt(document.getElementById("tt05_firstNumber").value);
  let number2 = parseInt(document.getElementById("tt05_secondNumber").value);

  const selectedIndex = document.getElementById("tt05_list").options.selectedIndex;

  let result = 0;

  switch (selectedIndex) {
    case 0 :
      result = (number1 + number2);
      break;
    case 1 :
      result = (number1 - number2);
      break;
    case 2 :
      result = (number1 * number2);
      break;
    case 3 :
      result = (number1 / number2) + (number1 % number2);
      break;
    default :
      result = -444;
  }

  return document.getElementById("tt05_result").innerText = "홀란드 : " + result + "입니다~!";
}


tt06 = function () {
  const selectedIndex = document.getElementById("tt06_list").options.selectedIndex;
  let input = document.getElementById("tt06_input").value;

  if (selectedIndex === 0) {
    return location.href = 'https://www.google.com/search?q=' + input;
  }

  if (selectedIndex === 1) {
    return location.href = 'https://search.naver.com/search.naver?query=' + input;
  }

  if (selectedIndex === 2) {
    return location.href = 'https://search.daum.net/search?q=' + input;
  }
}
