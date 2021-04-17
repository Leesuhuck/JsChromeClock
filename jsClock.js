const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");


function setClockChang(clock) {

    const limit = 10;

    if (clock < limit) {
        return `0${clock}`;

    } else {
        return clock;

    }
}

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // ``(~~) : 문자열로 나타내야 되는데 변수안에 값을 꺼내와야 할시 사용 "" 이걸로는 안꺼내집니다.

    /** 삼항연산자
     * (조건)? 참 : 거짓
     * `` : 현재 실행한 함수를 문자열로 변환 해준다.
     */
    //clockTitle.innerText = `${hours <10 ? `0${hours}` : hours}:${minutes <10 ? `0${minutes}` : minutes}:${seconds <10 ? `0${seconds}` : seconds }`;
    clockTitle.innerText = `${setClockChang(hours)}:${setClockChang(minutes)}:${setClockChang(seconds)}`;

}



/**
 * setInterval(fn, 1000)
 * 첫번째 아규먼트 : 함수
 * 두번째 아규먼트 : 실행할 시간 간격
 * 1000 = millisecond 기준
 */

function init() {
    getTime();
    setInterval(getTime,1000);
}

init();