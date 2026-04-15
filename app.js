const sign_up_form=document.querySelector("#sign_up_form");
const screen_two=document.querySelector("#screen_two");
const screen_one=document.querySelector("#screen_one");



sign_up_form.addEventListener("submit",(e)=>{
    e.preventDefault()
    screen_one.classList.replace("md:flex","hidden")
    screen_two.classList.remove("hidden")
})
