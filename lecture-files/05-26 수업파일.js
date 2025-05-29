/* const c = [..."hello"];
 console.log(c);


const word1 = "abc";
const word2 = "xyz";
const test = (...word1, ...word2);
console.log(word);


const world = [..."abcxyz"];
console.log(world);


class House {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    console.log(`건축한지 ${2025 - this.year}년 됐어요`);
  }
}

class Apartment extends House {
  constructor(name, year) {
    super(name, year);
  }

  getAge() {
    this.age();
  }
}

const test = new Apartment("테스트", 25);
test.getAge();
*/

class Rectangle extends Shape {
  constructor(w, h) {
    super(w, h);
    this.w = w;
    this.h = h;
  }
  getArea() {
    return Math.sqrt(this.w * this.h);
  }
}
let recl = new Shape(3, 4)
console.log(recl.getArea());