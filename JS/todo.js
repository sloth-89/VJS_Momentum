// HTML에서 생성된 오브젝트들 불러오기
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // 위에서 가져온 toDoForm 안에 input이 있기 때문에 이렇게도 작성 가능 (=document.querySelector("#todo-form input"))
const toDoList = document.getElementById("todo-list");
const toDoListModal = document.querySelector("#modal-todo-list");
const toDoListBtn = document.querySelector("#todo-list-btn");
const modal = document.querySelector("#modal");
const todoSpan = document.querySelector("#todo-span");

// key 변수에 모으기
const TODOS_KEY = "toDos"; // 2번 이상 사용되기 때문에 값을 변수에 담아준다.
const HIDDEN = "hidden";
const MODAL_OVERLAY = "modal-overlay";
const SLIDE_UP = "slide_up 0.5s ease-out";
const SLIDE_UP2 = "slide_up2 0.6s ease-out";
const SLIDE_DOWN = "slide_down 0.5s ease-out";
const SLIDE_DOWN2 = "slide_down2 0.6s ease-out";
const FADEIN = "fadeIn 0.5s linear";
const FADEOUT = "fadeOut 0.5s linear";

// 배열 생성
let toDos = []; // 값을 저장하기 위한 toDos 배열 생성 (항상 빈 배열로 시작)
// 기존의 값은 그대로 두고 새로운 값을 저장하기 위해서는 아래 parseToDos를 toDos에 저장을 한번 해줘야 한다.(parseToDos 참조)

// 마우스 반응형 효과들
// 마우스를 올렸을 떄
toDoListBtn.addEventListener("mouseover", (e) => {
  todoSpan.classList.remove(HIDDEN);
});
// 마우스를 내렸을 떄
toDoListBtn.addEventListener("mouseout", (e) => {
  todoSpan.classList.add(HIDDEN);
});
//toDoListBtn 클릭 시
toDoListBtn.addEventListener("click", (e) => {
  if (toDoListModal.classList.contains(HIDDEN)) {
    toDoListModal.classList.remove(HIDDEN);
    modal.classList.remove(HIDDEN);
    toDoListModal.style.animation = FADEIN;
    toDoList.style.animation = FADEIN;
    toDoInput.style.animation = FADEIN;
    modal.style.animation = FADEIN;
  } else {
    toDoListModal.style.animation = FADEOUT;
    toDoList.style.animation = FADEOUT;
    toDoInput.style.animation = FADEOUT;
    modal.style.animattion = FADEOUT;
    setTimeout(() => {
      toDoListModal.classList.add(HIDDEN);
      modal.classList.add(HIDDEN);
    }, 480);
  }
});

// modal 클릭 시
modal.addEventListener("click", (e) => {
  const eventTarget = e.target;
  if (eventTarget.classList.contains(MODAL_OVERLAY)) {
    toDoListModal.classList.add(HIDDEN);
    modal.classList.add(HIDDEN);
  }
});

// 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 배열을 string 타입으로 변환해서 저장.
} // toDos 배열을 로컬 스토리지에 저장하는 함수 작성

// 삭제
function deleteToDo(event) {
  const li = event.target.parentElement; // 지우고 싶은 타겟 잡기
  // event 값으로 event가 일어난 곳을 타겟으로 잡아 그 타겟이 입력되는 곳을 불러오는 것.
  li.remove(); // 위에 타켓으로 잡은 것을 지운다.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // toDos 배열에 필터를 씌워 각 값의 id와 li의 id(newTodo.id)가 같지 않은 것만 리턴.
  // toDo.id의 값은 Date.now()인데 이 값은 숫자타입이고 li.id는 string 타입이므로 둘을 비교하기 위해 li.id를 숫자타입으로 변환해준다.(parseInt)
  saveToDos(); // 값을 지운 상태를 저장하기 위해
}

// 화면 출력
function paintToDo(newTodo) {
  //일종의 body 태그 상태
  const li = document.createElement("li");
  li.id = newTodo.id; // li를 통해 id값을 구분해주기 위해 newTodo의 id값을 li의 id 값으로 담아준다. (이렇게 하면 요소의 id값이 생성된다.)
  const span = document.createElement("span");
  span.innerText = newTodo.text; // span에서 출력할 요소 작성
  // newTodoObj를 통해 paintToDo에 오브젝트로 값이 들어오기 때문에 오브젝트의 text 값만을 불러오기 위해서 .text를 붙여준다.
  const button = document.createElement("button");
  button.innerText = "❌"; // button에서 출력할 요소 작성
  button.addEventListener("click", deleteToDo); // 클릭이 되었다는 동작을 인식하게 한다.
  li.appendChild(span); // span을 li안에 appendChild를 이용하여 넣어준다.
  li.appendChild(button); // button을 li 안에 넣어준다.
  toDoList.appendChild(li); // li를 toDoList에 넣음으로써 화면에 출력한다.
} // 인풋에 입력한 값이 하나씩 출력되는 것을 볼 수 있다.

// 입력된 값의 처리 및 저장
function hadleToDoSubmit(event) {
  // event는 e로 약자 가능
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = ""; // 초기값을 빈 값으로 만들어 입력 이후 초기값(빈값)으로 돌아오게 한다.(newTodo에는 영향 x)
  const newTodoObj = {
    // 각 오브젝트에 id값을 주기 위해 변수에 text와 id 값을 담는다.
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // newTodoObj의 값을 toDos 배열에 푸쉬(추가)한다.
  paintToDo(newTodoObj); // toDos에 push된 newTodoObj 오브젝트를 출력해주기 위해 paintToDo에 담아준다.
  saveToDos(); // 로컬스토리지에 저장하는 함수 호출
}
// handleToDoSubmit함수는 먼저 새로고침을 방지하기 위해 e.preventDefault()를 실행시켜준다.
// 안해주면 새로고침이 된다.
// toDoInput.Value 즉, Input태그에 적은 값을 newToDo에 저장해주고 초기화 시켜준다.
// 그리고 toDos에 넣고 paintToDo함수와 saveToDos함수를 실행시킨다.
// paintToDo에 newTodoObj를 주는 것이다.
// (할일과 Date.now())를 주는 이유는 나중에 삭제 버튼을 누르면 그 id를 찾아서 삭제하기 위해서 고유의 id(Date.now())

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
// 8. Date.now() = 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리초를 Number 형으로 반환한다.
// 9. .filter(비우거나 값을 담을 변수명) = 기본값은 true이다. 조건과 함께 사용하면 그 조건에 맞는 것만 리턴한다.(단, 조건을 대입할 item의 공간을 변수로 만들어줘야 한다.)
//                                       실제 삭제를 하는 것이 아닌 필터를 씌워 걸러내는 것과 같기 때문에 원래 배열의 값을 없애는 것이 아닌 새로운 배열을 만들어 리턴하는 것.
//                                       조건은 나타낼 값에 포커스를 맞춰 작성.
// 10. 값의 타입을 알고 싶으면 값 앞에 typeof를 쳐서 console.log로 보면 된다.
// 11. parseInt(타입을 변환할 값) = 타입을 숫자 타입으로 바꿔준다.
// 12. 변수명.classList.contains("클래스명") = 특정 요소가 특정 클래스를 가지고 있는지 확인한다.(boolean 값으로 반환)
