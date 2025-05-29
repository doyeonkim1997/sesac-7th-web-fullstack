/* async function f1() {
  return 1;
}
async function f2() {
  return Promise.resolve(1);
}

console.log("1 >> ", f1());
f1().then(function (result) {
  console.log("2 >>", result);
});

console.log("3 >> ", f2());
f2().then(function (result) {
  console.log("4 >> ", result);
});

const f3 = async () => {
  return 3;
};


function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["사과", "레몬", "수박"];
      resolve(fruits);
    }, 1000)
  });
}
fetchFruits()
  .then(function (f) {
    console.log(f);
  })
  .catch(function (error) {
    console.log(error);
  })



const temp = [];
async function printItems() {
  const fruits = fetchFruits();
  console.log
}

fetchFruits()
  .then(function (F) {
    console.log(f);
    F.foreach((fruit) => {
      temp.push(fruit);
      console.log(temp);
    });
  })
  .catch(function error ) {
  console.log(error);

}
*/


function goMart() {
  console.log("마트에 가는 중...");
}

function pickjDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝냥!!!");
      product = "제로콜라";
      price = 20000;
      reject();
    }, 3000);
  });
}
function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
function nopay() {
  console.log("돈없음");
}

async function exec() {
  goMart();
  try {
    await pickjDrink().then(() => pay());
    pay();
  } catch (error) {
    nopay();
  }
}

exec();