//1. 导入的{} 中定义的变量
import {flag,sum} from "./aaa.js";

if(flag){
  console.log('哈哈哈哈');
}
console.log(sum(10, 70));
//2. 直接导入export定义的变量
import {num1,num2} from "./aaa.js";

console.log("sum="+sum(num1, num2));

//3. 导入export的function
import {mul,Person} from "./aaa.js ";
const people = new Person()

console.log("mul="+mul(63, 2));
people.run()

//4.
// import addr from "./aaa.js";
//
// console.log(addr);
//5.
import food from "./aaa.js";
food('糖醋排骨');
//6. 全部一起导入，取别名
import * as aaa from "./aaa.js";

console.log(aaa.flag);