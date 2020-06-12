// 1. use strict 
'use strict';

//2. variable
// let
// mutable data type
// let을 이용해 변수를 선언하는 경우 -> 해당 변수에 대한 메모리가 할당된다.
// 이후 값을 변경한다 하더라도 해당 변수는 값을 가르키는 포인터이므로 변경된 값을 저장한다.

// golbal scope
// 전역변수로 local변수와 달리 메모리가 시작부터 끝까지 할당되기 때문에 
// 블록에서만 사용하는 변수는 local변수를 사용한다. -> block scope

// var (X)
// var hoisting
// 어디에 선언했는지에 상관없이 선언을 맨위로 끌어올린다는 뜻.
// 선언전에 값을 할당하고 출력할 수 있으므로 최근에는 사용하지 않는다.
// 또한 블록스코프를 무시한다. 선언하지 않은 값을 사용하기도 함. -> risk가 존재한다.

//3. constants
// 선언한 값은 변경되지 않는다.
// inmutable data type 
// mutable data type -> 값이 메모리에 할당된 동안 변경이 가능한 데이터.

// 4.variable types
// primitive, single item : number, string , boolean, null , undefind , symbols
// object, box container
// function, first-class funtion (자바스크립트에서는 함수형도 자료형으로 포함된다)

// 연산 unvailed number 
// infinity -> 1/0 (0으로 나눈경우)
// negativeInfinity -> -1/0 (-로 나눈경우)
// nAn ( not a number )
// big int - > number 선언후 b 붙이는 경우 ex) 123456789b

// string
// char , string 모두 string
// + 연산자로 이용 가능
// 입력된 값을 붙이는 방법 : `붙일내용 ${변수명}!`

// null vs undefind
// null 은 값이 할당되지 않은 상태
// undefind 는 해당 값의 존재 여부도 판단할 수 없는 상태

//symbol
//고유한 symbol을 만들기 위해 생성
//같은 string 이 할당되어도 두 symbol은 다르다고 판단.
//같은 symbol을 만들기 위해서는 symbol1에 symbol2를 할당시켜야 한다.

// 5. dynamic typing 
// 타입을 선언하지 않고 프로그램이 동작할때 할당된 값에 따라 타입이 할당된다.
// 장 ) 상황에 따라 유연하게 사용가능
// 단 ) 공통작업을 하는 경우에 오류가 발생할 수 있다. 