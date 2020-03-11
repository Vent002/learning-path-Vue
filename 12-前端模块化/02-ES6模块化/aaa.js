let name = 'lyc'
let age = 18
let flag = true

function sum(num1 , num2){
  return num1 + num2;
}

if(flag){
  console.log(sum(20, 30));
}

//1. 导出方式一
export {
  flag , sum
}

//2. 导出方式二
export var num1 = 1000;
export var num2 = 2999;

//3. 导出 函数和类
export function mul(num1,num2){
  return num1 * num2
}
export class Person{
  run(){
    console.log('泡泡安排');
  }
  eat(){
    console.log('糖醋排骨');
  }
}
//4. export default
// 默认导出只能有一个
// const address = '四川省'
// export default address
// 5. export default function
export default function (argument){
  console.log(argument);
}