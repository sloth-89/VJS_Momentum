const API_KEY = "65d60f1205d97ccd938fb459842c61c1";

const icons = {
  Clouds: "fa-solid fa-cloud",
  Clear: "fa-solid fa-sun",
  Atmosphere: "fa-solid fa-wind",
  Snow: "fa-solid fa-snowflake",
  Rain: "fa-solid fa-cloud-rain",
  Drizzle: "fa-solid fa-cloud-sun-rain",
  Thunderstorm: "fa-solid fa-cloud-bolt",
};

function onGeoOk(position) {
  // GeolocationPosition을 파라미터로 사용 (이 안의 많은 정보들을 통해 아래 정보들을 가져올 수 있다.)
  // 담긴 정보 확인은 console.log로 확인
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.createElement("i");
      const weatherCon = document.querySelector("#weather");
      const weather = document.querySelector("#weather span:nth-child(1)");
      const city = document.querySelector("#weather span:nth-child(2)");
      const weatherDiv = document.createElement("div");

      icon.setAttribute("class", `fa ${icons[data.weather[0].main]}`);

      weather.innerText = `${data.weather[0].main} / ${parseFloat(
        data.main.temp
      ).toFixed(1)}℃`;
      city.innerText = data.name;

      weatherDiv.appendChild(icon);
      weatherDiv.appendChild(weather);
      weatherDiv.appendChild(city);

      weatherCon.innerHTML = "";
      weatherCon.appendChild(weatherDiv);
    }); // 위 url 호출
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// 사용 기능 정리
// 1. navigator.geolocation.getCurrentPosition() = 브라우저에서 현재 유저의 위치 좌표를 가져온다.
//                                                 ()안에 좌표를 가져오는데 성공했을 때, 실패했을 때 실행할 함수를 넣어준다.
// 2. https://openweathermap.org/api 에서 위도, 경도를 이용해 위치(날씨) 정보를 가지고 오는 API를 사용한다.
// 3. fetch(불러올변수) = 값을 불러와 실행한다. promise. (응답과 동작 사이에 시간이 있다.)
//                    .then(response => response.json()) = 응답을 받아 불러올 내용 추출
//                                                      .then(data => {불러올 자료값}) = 불러온 내용에 담긴 자료값 추출
// fetch에 대하여
// 우선 fetch는 Request나 Response와 같은 객체를 이용해서
// HTTP 파이프라인을 구성하는 요소를 조작하고 원격지에서 정보를
// 가져오기 위해 사용되는 프로미스타입의 메소드(함수)인데요.
// 즉 API같은 주소에서 정보를 빼내올때 쓴다는것입니다.
// fetch는 첫번째 인자로 URL(API 주소),
// 두번째 인자로 옵션 객체를 받고(필수는 아님),
// 프로미스 타입의 객체를 반환합니다.
// 여기서 프로미스를 간략히 설명드리자면 서버에 무언가 요청을 했을때
// 그 응답이 바로 오지 않고 어느정도 시간이 지난뒤 응답된다는건 다들 아실겁니다.
// 이때 이 요청코드때문에 응답이 대기중인 상태에선
// 다음코드로 못넘어가는 비효율적인 상태가되는데 이 상태를 모면하기위해
// 서버에 데이터를 불러오는것을 요청을 해놓고 기다리는 것이 아닌
// 다음 코드로 넘어가는 비동기처리를 하게되는데
// 이 비동기처리에 사용되는 객체를 프로미스라고 하는겁니다.
// 한마디로 서버에 데이터를 불러오려고 요청을했을때 시간많이걸릴때를 대비해
// 미리 다음코드가 먼저실행되고 응답이 왔을때 응답에 따라 실행되는것을
// 프로미스객체 라고 하는거죠
// 구동방식을 보자면 우선 fetch()에서 ()안에 주소를 인자로 넣으면
// 서버에 대한 응답 콜백(response객체)이 프로미스 타입으로 오게되면
// then(response => response.json())에서 response 객체를 받아
// 응답상태를 확인하고 만약 Fulfilled(이행)라면
// 두번째 .then에서 서버에 요청한 내용을 볼수있는것입니다.
// Fulfilled(이행) 상태는 101, 100, 404, 200과 같은 서버가
// 보내주는 응답콜백인데 이 응답콜백이 200(요청을 허락해줬다는 표시)이라면
// Fulfilled(이행) 상태가되는것입니다.
