// MITASK
// F-TASK
function findDoublers(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return true;
    }
  }
  return false;
}
console.log(findDoublers("hello")); // true 2l in hello word
console.log(findDoublers("leo")); //false

// MITASK
// E-TASK
/* function getReverse(str) {
  return str.split("").reverse().join('');
}
console.log(getReverse("hello"));   */

// MITASK
// D-TASK
/* class Shop {
  // state
  non;
  lagmon;
  cola;

  // constructor
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  // method
  getTime() {
    const now = new Date();
    const soat = String(now.getHours()).padStart(2, "0");
    const minut = String(now.getMinutes()).padStart(2, "0");
    return `${soat}:${minut}`;
  }

  qoldiq() {
    const time = this.getTime();
    return `Hozir ${time}da ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola}ta cola mavjud!`;
  }

  sotish(nomi, soni) {
    if (!this[nomi]) {
      return "Bunday mahsulot yo'q";
    }
    if (this[nomi] < soni) {
      return "Yetarli mahsulot yo'q";
    }
    this[nomi] -= soni;

    const time = this.getTime();
    console.log(`${time}da ${soni}ta ${nomi} sotildi`);
  }

  qabul(nomi, soni) {
    if (!this[nomi]) {
      return "Bunday mahsulot yo'q";
    }
    this[nomi] += soni;

    const time = this.getTime();
    console.log(`${time}da ${soni}ta ${nomi} qabul qilindi`);
  }
}

const shop = new Shop(4, 5, 2);
console.log(shop.qoldiq());
shop.sotish("non", 3);
shop.qabul("cola", 4);
console.log(shop.qoldiq());   */

// MITASK
// C-TASK

/* function checkContent(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let a_string = a.split("").sort().join("");
  let b_string = b.split("").sort().join("");
  return a_string === b_string;
}
console.log(checkContent("mitgroup", "gmtiprou")); // true
console.log(checkContent("leo", "oel")); // true. */

// MITASK
// B-TASK

/*function countDigits(string) {

  let count = 0;
  for (let number of string) {
    if (number >= "0" && number <= "9") {
      count++;
    }
  }
  return count;
}
console.log(countDigits("ad2a54y79wet0sfgb9"));   */

// MITASK
// A-TASK

/*function countLetter(a, b) {
  let count = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] === a) {
      count++;
    }
  } 
  return count;
}
console.log(countLetter("e", "engineer"));  */

// 21. NodeJS event loop va Callback functionlarni o'rganamiz

//console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba bo'ling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", //20-30
  "uzingizga ishlashingizni boshlang", //30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yoq endi", //60
];

// CALLBACK FUNCTION
/*function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("inseret a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function() {
      callback(null, list[5]);
    }, 4000);
    // callback(null, list[5]);
  }
}

console.log("passed here 0");
maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here 1");   */

//22. Asynchronous functionlarni qo'llash
// ASYNC FUNCTION
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("inseret a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return list[5];

    // setTimeout(function() {
    //   return list[5];
    // }, 4000);
  }
}

// call via then/catch
/*console.log("passed here 0");
maslahatBering(25)
  .then((data) => {
    maslahatBering(33)            //CALLBACK HELL!
      .then((data) => {
        maslahatBering(44)        //CALLBACK HELL!
          .then((data) => {
            console.log("javob:", data);
          })
          .catch((err) => {
            console.log("ERROR", err);
          });

        console.log("passed here 1");
        console.log("javob:", data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });

    console.log("passed here 1");
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

console.log("passed here 1");    */

// call via async/await
/*async function run() {
  let javob = await maslahatBering(20);
  console.log(javob);
  javob = await maslahatBering(31);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();   */

// PROMISE FUNCTION
/*async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("inseret a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
}

async function run() {
  let javob = await maslahatBering(20);
  console.log(javob);
  javob = await maslahatBering(71);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();
*/

// CALLBACK/setInterval

/*function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("inseret a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function() {
      callback(null, list[5]);
    }, 1000);
  }
}

console.log("passed here 0");
maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here 1"); 
*/
