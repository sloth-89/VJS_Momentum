const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // 위에서 가져온 toDoForm 안에 input이 있기 때문에 이렇게도 작성 가능 (=document.querySelector("#todo-form input"))
const toDoList = document.getElementById("todo-list");

function hadleToDoSubmit(event) {
  event.preventDefault(); // 페이지 새로고침 no
  const newTodo = toDoInput.value; // 입력한 값을 newTodo에 저장
  toDoInput.value = ""; // 초기값을 빈 값으로 만들어 입력 이후 초기값(빈값)으로 돌아오게 한다.(newTodo에는 영향 x)
}

toDoForm.addEventListener("submit", hadleToDoSubmit);
