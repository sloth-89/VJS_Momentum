const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date(); // 변수에 담아 사용한다.
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds(
    2
  )}`; // 시간을 텍스트로 호출
}

getClock(); // 직접 호출하여 실행해줌으로 랜더링 되자마자 바로 실행 되게 한다.
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
