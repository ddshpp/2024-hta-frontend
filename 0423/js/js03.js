class mm {
  name;
  hp;
  mp = 10;
  level = 1;
  success = "성공!";

  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  hello() {
    console.log("하이하이");
  }

  statusMM() {
    console.log('이름 : ' + this.name + '\n'
      + 'HP : ' + this.hp + '\n'
      + 'MP : ' + this.mp + '\n'
      + 'LEVEL : ' + this.level
    );
  }

  levelUp() {
    this.level++;
    console.log('렙업!!!!!!!');
  }

  levelUp10() {
    this.level += 10;
    console.log('엄청난 렙업!!!!!!!');
  }
}

function create() {
  let name = document.getElementById("inputName").value;
  let hp = document.getElementById("inputHp").value;

  const create1 = new mm(name, hp);
  create1.hello();

  testMMFunction1 = function () {
    create1.statusMM();
  }

  testMMFunction2 = function () {
    create1.levelUp();
  }

  testMMFunction3 = function () {
    create1.levelUp10();
  }
}
