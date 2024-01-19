/*
 Loops

 1) for (loop)
 2) while (loop)

*/

for(let i = 0; i < 10; i++ ){
    console.log(i)
}

let square = '*';
let side =6;


for(let i = 0; i <= side; i++){
    for(let j = 0; j<= side; j++){
      square += '*';
    }
    square += '\n'; // \n -> java 의 println 과 똑같아진다.
}
console.log(square);


/*

    for... in (loop)
*/

const yuSin = {
    name : '안유진',
    year : 2003,
};

for(let key in yuSin){
    console.log(key);
}

const iveMemberrsArray = ['안유진', '가을' , '레이', '장원영', '리즈', '이서'];

for(let key in iveMemberrsArray){
    console.log(key); //array 에서는 0각 인덱스값 호출
    console.log(`${key}:${iveMemberrsArray[key]}`); // 각 자리 멤버 호출

}

/*
    for ... of (loop)
*/

for(let value of iveMemberrsArray)
{
    console.log(value); // index -> (for .. in) , value -> (for.. of)

}

let number = 0 ;

while(number < 10) {
    console.log(number++)
}


