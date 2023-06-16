const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // 위에서 가져온 toDoForm 안에 input이 있기 때문에 이렇게도 작성 가능 (=document.querySelector("#todo-form input"))
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos"; // 2번 이상 사용되기 때문에 값을 변수에 담아준다.

let toDos = []; // 값을 저장하기 위한 toDos 배열 생성 (항상 빈 배열로 시작)
// 기존의 값은 그대로 두고 새로운 값을 저장하기 위해서는 아래 parseToDos를 toDos에 저장을 한번 해줘야 한다.(parseToDos 참조)

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 배열을 string 타입으로 변환해서 저장.
} // toDos 배열을 로컬 스토리지에 저장하는 함수 작성

function deleteToDo(event) {
  const li = event.target.parentElement; // 지우고 싶은 타겟 잡기
  // event 값으오 event가 일어난 곳을 타겟으로 잡아 그 타겟이 입력되는 곳을 불러오는 것.
  li.remove(); // 위에 타켓으로 잡은 것을 지운다.
}

// 화면에 출력하기 위한 함수
function paintToDo(newTodo) {
  //일종의 body 태그 상태
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo; // span에서 출력할 요소 작성
  const button = document.createElement("button");
  button.innerText = "❌"; // button에서 출력할 요소 작성
  button.addEventListener("click", deleteToDo); // 클릭이 되었다는 동작을 인식하게 한다.
  li.appendChild(span); // span을 li안에 appendChild를 이용하여 넣어준다.
  li.appendChild(button); // button을 li 안에 넣어주낟.
  toDoList.appendChild(li); // li를 toDoList에 넣음으로써 화면에 출력한다.
} // 인풋에 입력한 값이 하나씩 출력되는 것을 볼 수 있다.

function hadleToDoSubmit(event) {
  event.preventDefault(); // 페이지 새로고침 no
  const newTodo = toDoInput.value; // 입력한 값을 newTodo에 저장
  toDoInput.value = ""; // 초기값을 빈 값으로 만들어 입력 이후 초기값(빈값)으로 돌아오게 한다.(newTodo에는 영향 x)
  toDos.push(newTodo); // newTodo의 값을 toDos 배열에 푸쉬(추가)한다.
  paintToDo(newTodo);
  saveToDos(); // 로컬스토리지에 저장하는 함수 호출
}

toDoForm.addEventListener("submit", hadleToDoSubmit); // 이벤트리슨너를 활용하기 위해서는 그 동작을 인식할 함수에 event를 파라미터(argument)로 넣어준다.

// loading toDos

// function sayHello(item) {
//   // item을 넣어줌으로써 각각의 어떤 item에서 실행 되는지 알 수 있게 된다.
//   console.log("this is the turn off", item);
// } // forEach에 담을 함수

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // null 값이 존재할 수 있기 때문에 null 값일 경우에는 변환해주지 않기 위해 조건 설정
  const parseToDos = JSON.parse(savedToDos); // 변환할 값을 새로운 변수에 담아준다.
  toDos = parseToDos;
  parseToDos.forEach(paintToDo); // forEach에 화면 출력 함수를 담으면 각 item을 각각 화면에 출력해준다.
  // parseToDos.forEach(sayHello);
  // parseToDos.forEach((item) => console.log("this is the turn off", item)); 위와 동일(함수를 따로 작성해주냐 ()안에 넣어주냐의 차이)
}

// 사용 기능 정리
// 1. 변수명1.appendChild(변수명2) = 변수명2이 변수명1에 자식으로 들어간다. 이를 작성할 때 항상 맨 마지막에 작성해야한다는 것을 주의하자.
// 2. 변수명.remove() = 변수를 삭제한다.
// 3. 배열명.push(값) = 배열에 값을 추가한다.
// 4. localStorage = 오직 텍스트만 저장 가능. 배열 상태로는 저장 불가.
// 5. JSON.stringify(배열) = 배열을 string 타입으로 바꿔 준다.
// 6. JSON.parse(string으로 변한 배열) = string으로 변한 배열을 javascript에서 활용할 수 있는 배열로 바꿔준다.
// 7. 배열이 담긴 변수명.forEach(실행할 함수) = 배열의 각 item에 대해 각각 function을 동작해준다.
