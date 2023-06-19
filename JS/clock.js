const clock = document.querySelector("#clock");
const todayInfo = document.querySelector("#today-info");

function getClock() {
  const date = new Date(); // 날짜, 시간에 관한 모든 것을 변수에 담아 사용한다.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // 시간은 number 타입을 반환하므로 string으로 변환을 시켜주고 .padStart를 해야한다.
  clock.innerText = `${hours}:${minutes}:${seconds}`; // 시간을 텍스트로 출력
}

function getDay() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 + 1을 해줘야 제대로 나온다.
  const day = date.getDate();
  const days = date.getDay();

  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  todayInfo.innerText = `${year}년 ${month}월 ${day}일 ${weeks[days]}요일`;
}

getClock(); // 직접 호출하여 실행해줌으로 랜더링 되자마자 바로 실행 되게 한다.
getDay();
setInterval(getClock, 1000); // 그 후 시간이 흐른 시간을 1초마다 가져온다.

// 사용 기능 정리
// 1. setInterval(함수명, 시간(ms)) = 매번 일어나야하는 무언가 (ex. 매 5초마다 동작)
// 2. setTimeout(함수명, 시간(ms)) = 지정한 시간 뒤에 일어나는 무언가 (ex. 5초 후에 동작)
// 3. new Date().getDate() = 일을 가져온다.
//              .getDay() = 요일을 숫자로 가져온다. (일~토 = 0~6)
//              .getFullYear() = 년도를 가져온다.
//              .getHours() = 시간(시)를 가져온다.
//              .getMinutes() = 시간(분)을 가져온다.
//              .getSeconds() = 시간(초)를 가져온다.
// 4. .padStart(글자수, "추가할 글자") = string의 글자 수를 지정하고 지정한 글자수가 안될 시 앞에 지정 글자 수만큼 지정 글자를 추가한다.
//    .padEnd(글자수, "추가할 글자") = string의 글자 수를 지정하고 지정한 글자수가 안될 시 뒤에 지정 글자 수만큼 지정 글자를 추가한다.
