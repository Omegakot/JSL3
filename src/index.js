import {name,phone,placeholder,btn} from "./script3.js"

import "./sass.scss"
//валидность телефона
let btn2=document.querySelector(".btn2").addEventListener("click",()=>{
let reg=/\+7\((\d[0-9]).\)(\d[0-9]).\-(\d[0-9]).\d/g 
let result=phone.value.match(reg) 
console.log(result)
if(phone.value==""){
phone.style.border="1px solid red" }
if(result==null){
phone.style.border="2px solid red"
phone.placeholder="введен некорректный формат"
}
else if(phone.value!==""){
phone.style.border="2px solid green"
console.log(`введен верный формат ${result}`) }
})

//* валидность почты
let text2="my-t4ts@main.ru"
let reg=/my+(\.|\-|\S)+\@+[a-z]+\.+ru/g
let result=text2.match(reg)
console.log(result)






  


