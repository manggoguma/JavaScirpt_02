let num=0
if(num>0){
    console.log("num은 양수입니다.")
    } else if(num<0){
    console.log("num은 음수입니다.")
    } else{
        console.log("num은 0입니다");
    }


let score = 70
if (60>score){
    console.log("F학점입니다.");
} else if(70>score){
    console.log("D학점입니다.");
} else if(80>score){
    console.log("C학점입니다.");
} else if(90>score){
    console.log("B학점입니다.");
} else if (100>=score){
    console.log("A학점입니다.");
} else{
    console.log("성적을 잘못 입력하였습니다.");
}

let skills = ["HTML","CSS"]


if(skills.includes("JavaScript")&&skills.includes("React")){
    console.log("합격!");
} else if(skills.includes("JavaScript")||skills.includes("React")){
    console.log("예비");
} else {
    console.log("탈락");
}