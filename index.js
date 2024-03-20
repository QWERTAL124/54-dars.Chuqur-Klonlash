' use strict '

// Serverga ma'lumotlarni yuborishda oddiy ob'ektlardan emas faqat jsondan foydalaniladi.

const car = {
    name:'merc',
    color:'red',
    //obe'kt ichidagi obe'ktni ham klonlash
    extra:{
        isAirbag:false,
        ballon:5,
    },
}

// // Objectlarni JSON formatiga o'tkazish
// const objToJSON = JSON.stringify(car);
// console.log(objToJSON);

// // JSONdan objga o'girish
// const jsonToObj = JSON.parse(objToJSON);
// console.log(jsonToObj);

//Chuqur klonlash

const clone = JSON.parse(JSON.stringify(car));

// klonlangan obe'ktning xususiytlarini o'zgrtirishimiz mumkin
clone.extra.ballon = 10;

console.log(car);
console.log(clone);