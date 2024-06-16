function ex1() {
  alert("흠흠흠")
}

function ex2() {
  let temp;
  temp = document.getElementById("text111").value;
  alert(temp);
}

function ex3() {
  let temp2;
  temp2 = document.getElementById("text222").value;
  console.log(temp2);
}

function ex4() {
  document.getElementById("result1").innerText = document.getElementById('input1').value;
}

function ex5() {
  let number1 = document.getElementById("input2_1").value;
  let number2 = document.getElementById("input2_2").value;

  let result = parseInt(number1) + parseInt(number2) + " !!!!!!!!!!!!!!!!!!!!!!!!!!!";
  document.getElementById("result2").innerText = result;

  console.log(
    "첫번째숫자 : " + number1 + "\n"
    + "두번째숫자 : " + number2 + "\n"
    + "결과 : " + result
  )
}

function ex6() {
  let ifTestNumber1 = parseInt(document.getElementById("ifTestNumber1").value);
  document.getElementById("ifTestResult2").innerText = ex7(ifTestNumber1);

  let ifTestNumber2 = parseInt(document.getElementById("ifTestNumber2").value);
  document.getElementById("ifTestResult3").innerText = ex7(ifTestNumber2);

  let inequalitySign = " = ";
  if (ifTestNumber1 < ifTestNumber2) {
    inequalitySign = " < ";
  } else if (ifTestNumber1 > ifTestNumber2) {
    inequalitySign = " > "
  }

  let ifTestResult = ifTestNumber1 + inequalitySign + ifTestNumber2;
  document.getElementById("ifTestResult").innerText = ifTestResult + " 입니다!!!!!!!!!!!!!!!!1";

  console.log(
    "첫번째숫자 : " + ifTestNumber1 + "\n"
    + "두번째숫자 : " + ifTestNumber2 + "\n"
    + "결과 : " + ifTestResult
  )
}

function ex7(number) {
  number = parseInt(number);
  if (isNaN(number)) {
    return "숫자 입력하셈!!!!!!!!!!!!"
  }

  if ((number % 2) !== 0) {
    return "홀수";
  }
  return "짝수";
}

function ex8() {
  let inputHour = document.getElementById("inputTime").value;
  let timeTestResult = ex9(inputHour);

  console.log("결과 : " + timeTestResult);
  return document.getElementById("timeTestResult").innerText = timeTestResult;
}

function ex9(inputHour) {
  if (inputHour < 15) {
    if (inputHour < 9) {
      if (inputHour < 6) {
        return "새벽"
      }
      return "아침"
    }
    if (inputHour < 12) {
      return "아점"
    }
    return "점심"
  }
  if (inputHour < 21) {
    if (inputHour < 18) {
      return "점저"
    }
    return "저녁"
  }
  if (inputHour < 24) {
    return "야식"
  }
  return "뭐임"
}

function ex11(number) {
  if (number < 1) {
    return -1;
  }

  if (number > 11) {
    return "겨울"
  }
  if (number > 8) {
    return "가을"
  }
  if (number > 5) {
    return "여름"
  }
  if (number > 2) {
    return "봄"
  }
  return "겨울"
}

function ex10() {
  inputSajuNumber = parseInt(document.getElementById("saju").value);
  sajuTestResult = ex11(inputSajuNumber);
  console.log("결과 : " + sajuTestResult);

  if (sajuTestResult === -1) {
    sajuTestResult = "제대로 입력하세요!!!!!!!!!!!!"
  } else {
    sajuTestResult += "입니다!!!!!!!!!!!!"
  }

  return document.getElementById("sajuResult").innerText = sajuTestResult;
}
