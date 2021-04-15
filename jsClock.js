const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // ``(~~) : 문자열로 나타내야 되는데 변수안에 값을 꺼내와야 할시 사용 "" 이걸로는 안꺼내집니다.
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;

}

function init() {
    getTime();
}

init();