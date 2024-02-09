function greet() {
    console.log("안녕 내 이름은 제시카야");
}
greet()

function greet2(name) {
    console.log("안녕 내 이름은",name,"야");
}
greet2("에밀리")
greet2("할리")

function greet3(name) {
    console.log("안녕 내 이름은",name,"야");
    return name
}

greet3("지영")
///////////////////////////
function meetAt(year,month,day) {
    if(day){
        return `${year}/${month}/${day}`
    }
    if(month){
        return `${year}년 ${month}월`
    }
    if(year){
        return `${year}년`
    }
}

console.log(meetAt(2023,05,5));

/////////////////////////////

function findSmallestElement(arr) {
    let small=arr[0]
    if(arr.length === 0){
        return 0;
    }
    for(let i = 1; i< arr.length;i++){
        if(small>arr[i]){
            small = arr[i];   
        }        
    }
return small;
}
console.log(findSmallestElement([100,200,3,0,2,1]));

//////////////////////////////////////

moneyArr = [50000,10000,5000,1000,500,100]

function calculate(money) {
    for(let i = 0 ; i<moneyArr.length;i++){
        let num = parseInt(money/moneyArr[i])
        console.log(moneyArr[i],":",num)
        money= money-(moneyArr[i]*num)
}
}
calculate(12300)
