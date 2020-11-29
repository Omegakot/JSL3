export {name,phone,placeholder,btn}
//start
let name=document.querySelector("#name1")
let phone=document.querySelector("#name2")
let placeholder=document.querySelector("#name1")
let btn=document.querySelector(".btn1")

// валидность имени
btn.addEventListener("click",()=>{
let text=name.value
console.log(text)
let reg=/\d/g
let result=text.match(reg)
console.log(result)

if(text==""){
name.style.border="2px solid red" 
}
if(result !==null){
name.style.border="2px solid red"
name.placeholder="введен некорректный формат"
}
else if(text!==""){
name.value="Отлично!"
name.style.border="2px solid green" }
})