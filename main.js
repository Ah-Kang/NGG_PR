//랜덤 번호 지정 (펑션을 만들어야겠지?) done
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤 번호를 맞췄으면, 맞췄습니다!
//랜덤 번호 < 유저번호 Down! 
//랜덤 번호 > 유저번호 Up!
//Reset 버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다 쓰면 게임이 끝난다. (더이상 추측 불가, 버튼이 비활성화)
//유저가 1~100범위 밖에 숫자를 입력하면 알려준다, 기회를 깍지 않는다.
let number = 0
let inputNum = document.getElementById("inputNumber")
let goButton = document.getElementById("go-button")
let resetButton = document.getElementById("reset-button")
let resultArea = document.getElementById("result-area")


goButton.addEventListener("click",go)

inputNum.addEventListener("focus",function(){inputNum.value=""}) // inputNum.value = "" .value가 뭔지 모르겠고, 왜 "" 를 넣는 건지도 모르겠음

function go(){
  let userValue = inputNum.value

  if(userValue > 100 || userValue < 1){
    resultArea.textContent = "1과 100사이의 숫자를 넣어주세요."
    return
  }

  if(userValue < number){
    resultArea.textContent = "UP!"
    return
  }
  else if(userValue > number){
    resultArea.textContent = "Down!"
    return
  }
  else{
    resultArea.textContent = "정답입니다!"
    return
  }
}



function randomNumber(){
  number = Math.floor((Math.random()*100)+1)
  console.log(number)
}





randomNumber()