console.log('하이')


// 변수선언 -> var(값변경 가능) , let(var과 똑같으나 var보다 let을 쓰는것을 권장) , const(변하지않는값 설정)

// 템플릿 리터럴
const groupName = `ive `;
console.log(groupName+` 안유진 `);
console.log(`${groupName} 안유진 `);


// boolean 타입
const isTrue = true;
const isFalse = false
console.log(typeof isTrue);
console.log(typeof isFalse);

/* undefined 
    사용자가 직접 값을 초기화하지 않았을때 지정되는 값.

    직접 undifined 로 값을 초기화하는건 지양해야한다.  

    */
let noInit;
console.log(noInit);

/*
    null 타입(타입을확인하면 object로 나오나 버그이다. 실제로는 null 타입이어야한다.)
    undefined 마찬가지로 값이 없다는 뜻이나
    JS에서는 개발자가 명시적으로 없는 값으로 초기화할때사용 
*/

/*
    symbol 타입

    유일무이한 값을 생성할때 사용, 다른 프리미티브와 다르게 symbol 함수를 호출해서 사용
*/


const symbol1 = Symbol(`1`);
const symbol2 = Symbol(`1`);

console.log(symbol1 === symbol2);
// 고유의 값으로 인식하여 같지않다고 false 가뜸


/* 
    Object 타입 

    Map
    키:벨류와 쌍으로 이루어져 있다.
    Key : Value 
*/

const dictionary = {
    red : '빨간색',
    orange : '주황색',
    yellow : '노란색'
    // 콜론(:)을 기준으로 왼쪽으로 키값 우측으로 value값.
    
};

console.log(dictionary);
console.log(dictionary['red']);

// [] 안에 키값으로 값을 찾을수있다. 

/*
    Array 타입

    값을 리스트로 나열 할수 있는 타입.
*/


const iveMemberrsArray =- [
    '안유진',
    '가을',
    '이서',
    '레이',
    '리즈',
    
]

console.log(iveMemberrsArray);

/*
 index 
 0부터 시작 , 1씩 올라감 
*/

console.log(iveMemberrsArray[0]);

// [] 안에 번호 넣어서 index 값으로 해당위치 값 불러올수있음

// index 값을 바꿀수있음 

iveMemberrsArray[0] = '코드팩토리';
console.log(iveMemberrsArray);

/* static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할시 명시를 한다.
    ((ex) JAVA, C++ )

    dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에의해 타입을 "추론"한다.
    JS -> dynamic typing
    값이 어떻게 들어가냐에 따라 숫자형인지 문자형인지 JS 에서 추론하여 정한다. 
*/

