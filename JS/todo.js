const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // 위에서 가져온 toDoForm 안에 input이 있기 때문에 이렇게도 작성 가능 (=document.querySelector("#todo-form input"))
const toDoList = document.getElementById("todo-list");

function deleteTodo(event) {
  const li = event.target.parentElement; // 지우고 싶은 타겟 잡기
  // event 값으오 event가 일어난 곳을 타겟으로 잡아 그 타겟이 입력되는 곳을 불러오는 것.
  li.remove(); // 위에 타켓으로 잡은 것을 지운다.
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo; // span에서 출력할 요소 작성
  const button = document.createElement("button");
  button.innerText = "❌"; // button에서 출력할 요소 작성
  button.addEventListener("click", deleteTodo); // 클릭이 되었다는 동작을 인식하게 한다.
  li.appendChild(span); // span을 li안에 appendChild를 이용하여 넣어준다.
  li.appendChild(button); // button을 li 안에 넣어주낟.
  toDoList.appendChild(li); // li를 toDoList에 넣음으로써 화면에 출력한다.
} // 인풋에 입력한 값이 하나씩 출력되는 것을 볼 수 있다.

function hadleToDoSubmit(event) {
  event.preventDefault(); // 페이지 새로고침 no
  const newTodo = toDoInput.value; // 입력한 값을 newTodo에 저장
  toDoInput.value = ""; // 초기값을 빈 값으로 만들어 입력 이후 초기값(빈값)으로 돌아오게 한다.(newTodo에는 영향 x)
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", hadleToDoSubmit);

// 사용 기능 정리
// 1. 변수명1.appendChild(변수명2) = 변수명2이 변수명1에 자식으로 들어간다. 이를 작성할 때 항상 맨 마지막에 작성해야한다는 것을 주의하자.
