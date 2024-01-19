/*

        Operators -> 연산자라고부른다.
*/

/*
1. 산술연산자 
1)덧셈
2)뺄셈
3)곱셉
4)나눗셈
5)나머지

2. 증가와 감소
 
*/

let number = 1;

number ++;
console.log(number);

/*
연산자의 위치
*/

let result = 1;
console.log(result);

result = number ++;
console.log(result , number);


/*
현실에서는 ++ -- 앞에 두는경우는 없다고 생각할것 
쓰면 선임한테 뒷통수맞는다고 함.
++ -- 쓸데 앞에 ++ -- 쓰지말고 꼭 변수뒤에 ++ -- 쓸것
*/

/*
 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게될까?
*/

let sample = '99';

console.log(+sample);


sample = true;
console.log(+sample);
console.log(typeof +sample)

sample = '안유진';
console.log(+number);
// NAN -> NOt a Number


/*
    할당 연산자 (assignment operator)
    += , -=, *=, /=, %=
    */

number = 100;
console.log(number);


number += 10;
console.log(number);


/*
    비교연산자 (자바스크립트의 특이함 2개가있다.)
    1) 값의 비교
    거의쓰지않는다, 사실상 필요없는 기능
    (5 == 5) -> true , (5 == '5') -> true  (0 == '') -> true
    값만 비교
    2) 값과 타입의 비교
    === 
    값과 타입까지 다 비교한다.

    (5 === '5') -> false
    아닌것을확인하는거는 !== 를 사용
    
    


*/

/*
    단축평가
    && 사용했을때 좌측이 true면 우측값 반환
    && 사용했을때 좌측이 false면 좌측값 반환
    || 사용했을때 좌측이 true면 좌측값 반환
    || 사용했을때 좌측이 false면 우측값 반환
    실무에서 많이쓴다고함.
    */

console.log(true||'아이브'); 
console.log(false||'아이브');
console.log(false&&'아이브');
console.log(true && '아이브')

/*
    지수연산자 
*/

console.log(2**2); // 2의 2승
console.log(10**3) // 10의 3승

/*
    null 연산자
*/

let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);

// ?? : 좌측값이 null 또는 undifined 일때 우측값을 반환해라 

name = name ?? '아이브';
console.log(name);

// 이제 name 에 코드팩토리란값이 들어갔기때문에 더이상 우측값을 반환하지않음 .


