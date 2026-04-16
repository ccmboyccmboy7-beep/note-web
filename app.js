

const sign_up_form=document.querySelector("#sign_up_form");
const screen_two=document.querySelector("#screen_two");
const screen_one=document.querySelector("#screen_one");
const theme_toggle=document.querySelector("#theme_toggle");
const screens=document.querySelector(".screens")
const salan_magaca=document.querySelector("#salan_magaca ")


sign_up_form.addEventListener("submit",(e)=>{
    e.preventDefault()
    screen_one.classList.replace("md:flex","hidden")
    screen_two.classList.remove("hidden")
    const magac=document.querySelector("#name_loging").value;
    salan_magaca.textContent=magac;
    
})

theme_toggle.addEventListener("click",(e)=>{

document.documentElement.classList.toggle("dark");
theme_toggle.classList.toggle("text-orange-200")
})



