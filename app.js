// Nazariy

// masala 1

// Arrayning sort metodi arrayni tartiblashda yordam beradi, 
// Agar array stringlar bulsa va sort methot propertiysiga hech narsa yozmasak bu bizga Alfabet tartibida tartiblab beradi. 
// Agar array numberlardan tashkil topgan bulsa va array.sort() yozzak raqamlar buyicha tartiblaydi (kattasini emas)
// Agar array numberlardan tashkil topgan bulsa va biz uni katta kichikligi buyicha tartiblashim kerak bulsa

// array.sort((a, b) => a-b)  kabi yozamiz

// masala 2

// While , Do While , For bu loop hisoblanadi false qiymat topmaguncha ishlaydigan kod.  Ular asosan sintaksisida farq qiladi 

// For ga misol 

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// } 
// Bu yerda consolga 0 dan 10 gacha bulgan sonlarni chiqaradi

// While ga misol

// let i = 0;
// while(i < 10) {
//     console.log(i)
//     i++
// }
// Bu yerda o'zgaruvchini global scopeda chaqirayabmiz va while ga condition berib uning ichida foydalanayabmiz i++ bu o'zgaruvchini bittaga oshiradi va loop yana ishlaydi

// Do While ga misol

// let i = 0;
// do {
//     console.log(i)
//     i++
// } while(i < 10)
// do wile ham qolganlari bilan sintaksisida farq qiladi

// masala 3

// This kalit so'zi qayerda qanday ishlatishiga qarab farq qiladi
// 1) Global scopeda this windowga teng
// 2) function scopeda this windowga teng
// 3) eventda shu eventga teng
// 4) objectdadagi methodlar ichida shu objectga teng


// masala 4

// Object methodlari objectlar ustuda ishlaydi

// let obj = {
//     name: 'asliddin',
//     age: 19
// }
// console.log(Object.keys(obj)) keylarini olib beradi
// console.log(Object.values(obj)) valuelarini olib beradi
// console.log(Object.freeze(obj))  uni muzlatadi keyin uni  o'zgartirib bo'lmaydi


// Amaliy

// masala 5

let numbers = [-1, 3, 5, -3, -10, 2, -9]
let result = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 0) {
        result.push(numbers[i])
    }
}
console.log(result)

// masala 6

let nums = [-1, 3, 5, -3, -10, 2, 10, -9]

for(let i = 0; i < nums.length; i++) {
    nums.sort((a, b) => a - b)
}
console.log(nums[nums.length - 1])

// masala 7

const arr1 = [5,6,true, null, 8]
const arr2 = [0,2,5, false, 6]
let newArr = arr1.concat(arr2);
let natija = 0;

for(let i = 0; i < newArr.length; i++) {
    let type = typeof newArr[i]
    if(type == 'number') {
        natija += newArr[i]
    }
}
console.log(natija)

// masala 8

let arrr = [2,3,0,4, false, 0]
let jami = 0;

for(let i = 0; i < arrr.length; i++) {
    let type = typeof arrr[i]
    if(type == 'number') {
        jami += arrr[i]
    }
}
console.log(jami)
