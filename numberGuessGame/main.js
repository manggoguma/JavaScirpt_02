// 1. 랜덤번호 지정
// ☑️ Math.random() -> 랜덤한 숫자를 뽑는 것
// 다만, 0~1 사이의 숫자가 출력되므로 랜덤한 두자리 수를 뽑을 때에는 *100을 해줌
// Math.random()*100 : 1~99까지 출력, +1을 해줘야 1~100까지 출력
// ☑️ Math.floor() -> 반올림 함수

let computerNum = 0;
let playButton =document.getElementById("play-button");
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")

playButton.addEventListener("click",play)

function pickRandomNum() {
    computerNum=Math.floor(Math.random()*100+1);
    console.log("정답",computerNum);
}

function play(params) {
    let userValue=userInput.value;

    if(userValue<computerNum){
        resultArea.textContent="UP"
        
    } else if(userValue>computerNum){
        resultArea.textContent="Down!"
        
    } else{
        resultArea.textContent="정답!"
    }
}
pickRandomNum();

// 2. 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호 < 유저 번호 DOWN!!
// 랜덤번호 > 유저 번호 UP!!
// Reset버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다 쓰면 게임이 끝난다(더이상 추측 불가, 버튼이 disable )
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. (기회를 깎지 않는다)
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. (기회를 깎지 않늗다)