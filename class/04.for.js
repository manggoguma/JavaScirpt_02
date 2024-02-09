// 1부터 100까지 더하는 for문을 만들고 결과 출력
// 1+2+3+4+'''''+99+100
let sum = 0 
for(let i=0; i<=100;i++){
        sum +=i
    }
console.log(sum);

// 1부터 100까지 홀수만 출력
for(let i=1;i<=100;i++){
    if(i%2==1){
        console.log(i);
    }
}

// 1부터 50까지 369 결과를 프린트
for(let i=1;i<=50;i++){
    let stringValue = i.toString()
    let result = ""
 for(let j = 0 ; j< stringValue.length;j++){
    if(stringValue[j]==="3"||stringValue[j]==="6"||stringValue[j]==="9"){
        result += "짝"
    }
 }
 console.log(result.length>0?result:i);
}


// 주어진 숫자가 소수이면 true, 아니면 false를 출력하는 프로그램
// 소수는 1과 자기자신만을 약수로 가지는 것
// 5면 1부터 4까지 다 나눠보고 만약에 나머지가 0이면 소수가 아니다=>출력
// 자기보다 작은 수로 나눴을 떄 나머지가 0이면 break 나머지가 0 이 아니면 출력

let n = 11;
let answer = true; // 약수일떄

for(i=2;i<n;i++){
    let num = n%i
    if(num==0){
        answer = false ;}
    }
console.log(answer);
