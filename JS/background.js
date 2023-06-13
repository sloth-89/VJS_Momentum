const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("Img"); // img 태그를 HTML에 생성해주는 것과 같다. (값은 폴더명)

bgImage.src = `Img/${chosenImage}`; // img 태그의 src를 작성해주는 것과 같다.

document.body.appendChild(bgImage); // HTML의 body 태그 안에 위에 작성한 element를 넣어준다.

// 사용 기능 정리
// 1. document.createElement("폴더명") = element(요소)를 생성한다.
// 2.         .body.appendChild(변수명) = HTML의 body 태그 안에 생성한 element를 넣어준다.
