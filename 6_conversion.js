/*
    타입변환

    1)명시적 
    2)암묵적

*/

let age = 32;
// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// toString 함수로 string 타입으로 변경가능. 

let test = age + ' ';
console.log(typeof test, test);

// 숫자 + 문자 일시 문자스타일로 된다. 

console.log('98' + 2);

// 98 은 string 값 , 2가 string 값으로 변경되어 982로 변경

console.log('98' * 2);

// string 에는 곱하기가 없으니 그대로 숫자로 곱해짐 

console.log('98' - 2);

// string 에는 -가없으니 그대로 빼기가됨. 

/*
이런 기능이가능하나 실무에서는 절대 쓰면 안된다 
암묵적으로 하면안되고 항상 명시적으로 변환으로 주어야 한다.
*/

console.log(typeof (99).toString());
console.log(typeof (true).toString());
console.log(typeof (Infinity).toString());

console.log(typeof parseInt(('0')))
// 숫자타입변환

/*
    boolean 타입으로의 변환 
    실무에서 많이 쓴다고함
*/

console.log(!'x'); // ! = false , !! = true

// string 에 어떤값이 있더라도 !! true 반환 

console.log(!!'');
// 값이없으면 false , 값이 있냐없냐에 따라 다르다.

console.log(!!0); 
console.log(!!'0')
console.log(!!undefined)
// 0이라는 숫자는 false 0이라는 문자는 true
// undefined , null -> false 
// 값이 존재하면 true 
// 자바스크립트는 조금 이상한녀석이다.

/*
    1) 아무글자도 없는 String
    2) 값이 없는 경우
    3) 0일때 

    모두 false 반환.
*/
