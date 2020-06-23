'use strict';
//function
// 재사용성
// 빌딩구조로 형성
// 계산 등과 같은 작업을 수행하기위함

//1.function declaration
// function name(parameter1,parameter2){body ,,,, return;}
// 하나의 함수는 하나의 기능만 한다.
function printHello(){
    console.log('Hello');
}

printHello();

function hello(message){
    console.log(message);
}

hello('2312drqf#3');
//2. parameters
// premitive parameters : 값 저장
// object parameters : 주소 저장 (함수내에서 변경된 사항은 주소를참조하므로 블럭을 나오더라도 바뀐내용이 적용된다.)

//3. default parameters (ES6 이상 추가된 기능)

function showMassage(message,from = 'unknown'){
    console.log(`${message} by ${from}`);
}
shoeMessage('Hi!');

//4. rest parameters (ES6 이상 추가된 기능)
function printAll(...args){
    for (let i = 0 ; i < args.length; i++){
        console.log(args[i]);
    }
}
printAll('dream','comes');

//5. local scope
//6. return value
//7. early return, early exit
function upgradeUser(user){
    if (user.point > 10){
        //long upgrade logic
    }
}
function upgradeUser(user){
    if (user.point <= 10){
        return;
        //조건에 해당하지 않는경우 빨리 종료함
    }
}
//anonymous function
const print = function print(){
    console.log('print');
};

//2. callback function using function expression
function randomQuiz(answer,printYes,printNo){
    if (answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
};
const printYes = function (){
    console.log('yes!');
};
const printNo = function print(){
    console.log('no!');
};

randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

// named function
// 디버거시 편리하다.
// 반복호출 가능
const printNo = function print()
{
    console.log('no!');
    print();
};
const simplePrint = () => console.log('simplePrint!');
const add = (a,b) = > a + b;
