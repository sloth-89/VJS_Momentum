// querySelector 를 사용할 때는 id인지 class 인지 표시를 해줘야 한다.
// getElementById or Classname은 그냥 입력 가능
// const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 대문자로 쓰는 이유 - 관습적인 이유이지만, 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
const USERNAME_KEY = "username"; // 반복되는 값들을 변수로 한대모아 활용 (JS는 변수명이 오타가 나면 지적해주지만 string이 오타나면 지적하지 않는다.)

function onLoginSubmit(event) {
  event.preventDefault(); // form은 submit하면 브라우저는 기본적으로 새로고침을 하는데, 이를 사용하면 막을 수 있다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value; // input의 입력값을 변수에 넣어줌

  localStorage.setItem(USERNAME_KEY, username); // 값을 저장

  paintGreeting(username);
  // greeting.innerText = "Hello " + username; // 1) string과 변수를 합쳐서 출력(변수에 넣어서)하는 방법 1
  // greeting.innerText = `Hello ${username}`; // 2) string과 변수를 합쳐서 출력(변수에 넣어서)하는 방법 2
  // greeting.classList.remove(HIDDEN_CLASSNAME);

  // argument 값을 주어 이벤트에 대한 정보를 확인 할 수 있다. (event 라는 값이 관행)

  // 1) 값이 입력되지 않았을 때, 2) 15자가 넘을 때
  // 원래 입력값을 제한 하기 위해서는 이런 식의 함수가 필요
  // if (username === "") {
  //   alert("Please write your name.");
  // } else if (username.length > 15) {
  //   alert("Your name is too long.");
  // }
  // 하지만 index에서 input 속성 값에 지정해주면 브라우저가 알아서 해준다.
}

// 2번 이상 이용되는 동작이기 때문에 함수로 묶어준다.
function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  // greeting.innerText = `Hello ${saveUsername}`; // 저장된 값을 불러오기 때문에 saveUsername
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(saveUsername);
}

// 함수에 ()가 붙으면 한번 실행한다.
// ex) onLoginSubmit({이 object에는 현재 function으로 일어나는 event에 대한 정보를 담고 있다.});

// 사용 기능 정리
// 1. argument명.preventDefault(); = 어떤 함수에 대해 브라우저가 기본적으로 수행하는 동작들을 막는 함수
// 2. document.querySelector("HTML에 작성된 요소"); = 앞에 id는 #, class는 .으로 구분하여 표시
// 3. console.log(출력할 내용); = 태그 내용을 출력
//           .dir(출력할 내용); =  dir은 객체의 속성(정보)을 출력 (dir의 경우 '.속성' 을 붙여 특정 속성값만 지정하여 출력 가능)
// 4. 변수명.classList.add(클래스명); = class명으로 작성된 css 속성들을 추가
//                    .remove(클래스명); = class명으로 작성된 css 속성들을 추가
// 5. 변수명.innerText = `내용`; = 변수를 srting 타입으로 변화하여 화면에 내용을 출력해준다.
// 6. 변수명.addEventListener("출력내용", 실행할 함수명); = 이벤트 동작을 감지하여 지정한 이벤트가 발생했을 때만 실행하게 한다. 직접 실행 방식이 아닌 브라우저가 실행해주는 방식
// 7. localStorage.속성(); = 브라우저에 이미 정의되어있는 API. 웹페이지에서 일어나는 일들을 local storage에 저장해준다. (ex. 유저이름, 볼륨상태 등)
//                .setItem("key명", "값"); = DB에 지정한 값을 저장한다.
//                .getItem("key명"); = DB에 저장된 값을 불러온다.
//                .removeItem("key명"); = DB에 저장된 값을 삭제 한다.
