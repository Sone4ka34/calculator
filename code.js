let first = document.querySelector(".First"); // первый инпут
let second = document.querySelector(".Second"); // второй инпут
let operators = document.querySelectorAll("button"); // коллекция кнопок
let result = 0; // изначально значение в калькуляторе 0
// operators[0].onclick = () => {
//   result = Number(first.value) + Number(second.value);
//   first.value = result;
//   second.value = ''
// }
// operators[1].onclick = () => {
//   result = Number(first.value) - Number(second.value);
//   first.value = result;
//   second.value = ''
// }
// operators[2].onclick = () => {
//   result = Number(first.value) / Number(second.value);
//   first.value = result;
//   second.value = ''
// }
// operators[3].onclick = () => {
//   result = Number(first.value) * Number(second.value);
//   first.value = result;
//   second.value = ''
// }
let [plus, minus, division, multi, sqrt, pow] = operators; // использую деструктуризацию
plus.onclick = () => {
  result = Number(first.value) + Number(second.value);
  first.value = result;
  second.value = "";
};
minus.onclick = () => {
  result = Number(first.value) - Number(second.value);
  first.value = result;
  second.value = "";
};
division.onclick = () => {
  result = Number(first.value) / Number(second.value);
  first.value = result;
  second.value = "";
};
multi.onclick = () => {
  result = Number(first.value) * Number(second.value);
  first.value = result;
  second.value = "";
};
sqrt.onclick = () => {
  result = Math.sqrt(first.value);
  first.value = result;
  second.value = "";
};
pow.onclick = () => {
  result = Math.pow(first.value, second.value);
  first.value = result;
  second.value = "";
};
// раньше было так
// let plus = operators[0]
