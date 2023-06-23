/** modal 토글 버튼과 modal-todo-list 요소를 변수로 저장 */
const todoListBtn = document.getElementById("todo-list-btn");
const modalTodoList = document.getElementById("modal-todo-list");

/** 토글 버튼 클릭 시 main 요소의 위치 조정 함수 */
function toggleMainPosition() {
  /** modal-todo-list가 보이는 경우 */
  if (!modalTodoList.classList.contains("hiddend")) {
    // main의 위치를 modal-todo-list의 높이만큼 아래로 내림
    const modalHeight = modalTodoList.clientHeight;
    document.getElementById(
      "main"
    ).style.transform = `translate(-50%, calc(-50%, ${modalHeight}px))`;
    // modal-todo-list가 숨겨진 경우, main의 위치를 원래대로 복원
    document.getElementById(("main".style.transform = `translate(-50%, -50%)`));
  }
}

/** 토글 버튼 클릭 시 toggleMainPosition 함수 호출 */
todoListBtn.addEventListener("click", toggleMainPosition);
