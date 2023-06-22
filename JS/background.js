const images = ["0.jpg", "1.jpg", "2.jpg"];

// 이미지 랜덤뽑기
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("Img"); // img 태그를 HTML에 생성해주는 것과 같다. (값은 폴더명)

const container = document.querySelector(".full-background");

bgImage.src = `Img/${chosenImage}`; // img 태그의 src를 작성해주는 것과 같다.

container.appendChild(bgImage); // HTML의 body 태그 안에 위에 작성한 element를 넣어준다.

// 반응형 추가
function hadleWindow(e) {
  const windowWidth = e.target.innerWidth;
  const windowHeight = e.target.innerHeight;
  const broswerRadio = windowWidth / windowHeight;
  const imageRatio = 1920 / 1080;
  if (imageRatio > broswerRadio) {
    container.style.height = "100%";
    container.style.width = `${windowHeight * imageRatio}px`;
    container.style.left = `${(windowWidth - windowHeight * imageRatio) / 2}px`;
    container.style.top = "0";
  } else {
    container.style.height = `${windowWidth / imageRatio}px`;
    container.style.width = "100%";
    container.style.left = "0";
    container.style.top = `${(windowHeight - windowWidth / imageRatio) / 2}px`;
  }
}

window.addEventListener("resize", hadleWindow);
window.dispatchEvent(new Event("resize")); // 강제로 리사이즈 이벤트 발생 시켜줌

// 사용 기능 정리
// 1. document.createElement("폴더명") = element(요소)를 생성한다.
// 2.         .body.appendChild(변수명) = HTML의 body 태그 안에 생성한 element를 넣어준다.

// 대부분 스타일을 위한 코드들이다. 여기서 중요한 코드는 document.querySelector와 document.createElement이다
// 먼저 document.querySelector는 html파일에서 특정 아이디, 클래스를 가진 태그를 찾는 것이다.
// querySelector("") ""안에 들어올 것으로 #과 .와 태그가 올 수 있다.
// class를 찾을 때에는 위처럼 .클래스명을 넣어주면 되고 id로 검색할 때는 #id명을 넣어주면 된다.
// 클래스명과 id명 뒤에 찾을 태그를 입력해주면 된다.
// 예를 들어, document.querySelector("#full-screen span:first-child") 이런식으로 하면 된다.
// document.createElement("img")는 html에 <img>태그를 추가해준다는 것이다. img 뿐아니라 여러 <span> <button>등 다양한 태그가 올 수 있다.
// appendChild와 prependChild가 있다. append는 그 태그의 가장 뒤에 추가하는 것이고 prepend는 그 태그 가장 앞에 추가해준다.
