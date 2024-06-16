class coder {
  name = "기본값"
  hp = 10;
  level = 1;

  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  // testFunction1() {
  //   console.log(this.name);
  // }

  // testFunction2() {
  //   console.log(this.hp)
  // }
  testFunction3() {
    console.log('이름 : ' + this.name + '\n' +
      'HP : ' + this.hp + '\n' +
      'Level : ' + this.level
    );
  }

  testFunction4() {
    this.hp += 10;
    this.level++;

    console.log('[ HP +20 ]' + '\n' +
      'HP : ' + this.hp + '\n' +
      '[ LEVEL +1 ]' + '\n' +
      'LEVEL : ' + this.level
    );
  }
}


function js02Test1() {
  let inputName = document.getElementById("js02TestName").value;
  let inputHp = parseInt(document.getElementById("js02TestHp").value);

  const coder1 = new coder(inputName, inputHp);

  coder1.testFunction3();
  coder1.testFunction4();
  coder1.testFunction3();
}
