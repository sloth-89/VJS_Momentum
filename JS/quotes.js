const quotes = [
  {
    quote: "The busy bee has no time for sorrow.",
    korean: "바쁜 벌은 슬퍼할 시간이 없다.",
    author: "William Blake, 윌리엄 블레이크",
  },
  {
    quote: "You need chaos in your soul to give birth to a dancing star.",
    korean: "춤추는 별을 잉태하려면 반드시 스스로의 내면에 혼돈을 지녀야 한다.",
    author: "Friedrich Nietzshe, 프레드리히 니체",
  },
  {
    quote: "Gratitude is the most exquisite form of courtesy.",
    korean: "감사는 정중함의 가장 아름다운 표현이다.",
    author: "Jacques Maritain, 자크 마리탱",
  },
  {
    quote: "Life is a long lesson in humility.",
    korean: "인생은 겸손에 대한 오랜 수업이다.",
    author: "James M. Barrie, 제임스 M. 베리",
  },
  {
    quote: "Life could be wonderful if people would leave you alone.",
    korean: "사람들이 너를 내버려두면 삶은 아름다울 거야.",
    author: "Charlie Chaplin, 찰리 채플린",
  },
  {
    quote: "Age is foolish and forgetful when it underestimates youth.",
    korean: "젊음을 과소평가할 때 나이는 어리석고 부주의한 것이 되고만다.",
    author: "J. K. Rowling, 조앤 K. 롤링",
  },
  {
    quote: "He who would travel happily must travel light.",
    korean: "행복하게 여행하려면 가볍게 여행해야 한다.",
    author: "Antoine de Saint-Exupery, 생텍쥐페리",
  },
  {
    quote:
      "if you wouldst live long, live well, for folly and wickedness shorten life.",
    korean: "오래 살기를 원하면 잘 살아라, 어리석음과 사악함이 수명을 줄인다.",
    author: "Benjamin Franklin, 벤자민 프랭클린",
  },
  {
    quote: "The first duty of love is to listen.",
    korean: "사랑의 첫 번째 의무는 상대방에 귀기울이는 것이다.",
    author: "Paul Tillich, 폴 틸리히",
  },
  {
    quote: "Everything that I understand, I understand only because I love.",
    korean: "내가 이해하는 모든 것은 내가 사랑하기 때문에 이해한다.",
    author: "Lev Tolstoy, 레프 톨스토이",
  },
]; // 명언 배열

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 명언 랜덤 뽑기
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // 랜덤하게 '0 ~ quotes의 길이'까지의 숫자로 quotes 배열에서 숫자에 맞는 값을 출력하는 함수 정의

// 명언 출력
quote.innerText = todaysQuote.quote; // string 타입으로 화면에 출력
author.innerText = todaysQuote.author; // string 타입으로 화면에 출력

// 사용 기능 정리
// 1. Math.radom() = 0 ~ 1 사이의 숫자를 소수점으로 랜덤하게 가져온다.
//                * 10 = 10을 곱해주면 0 ~ 10 사이의 숫자를 소수점 포함 랜덤하게 가져오게 된다.
//        .round(숫자) = 입력한 숫자가 소수점일 때 반올림하여 가져온다.
//        .ceil(숫자) = 입력한 숫자가 소수점일 때 올림하여 가져온다.
//        .floor(숫자) = 입력한 숫자가 소수점일 때 내림하여 가져온다.
// 2. 변수.length = 변수에 담긴 값의 길이를 가져온다.
