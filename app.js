

const sign_up_form=document.querySelector("#sign_up_form");
const screen_two=document.querySelector("#screen_two");
const screen_one=document.querySelector("#screen_one");
const theme_toggle=document.querySelector("#theme_toggle");
const screens=document.querySelector(".screens")
const salan_magaca=document.querySelector("#salan_magaca ")
 const next_arrow=document.querySelector("#next_arrow")


sign_up_form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Qabo magaca qofka qoray
    const magaca_la_qoray = document.querySelector("#name_loging").value;
    
    // Animation-ka Arrow-ga
    next_arrow.classList.add("translate-x-full", "transition-transform");

    setTimeout(() => {
        screen_one.classList.replace("md:flex", "hidden");
        screen_two.classList.remove("hidden");
        
        // Halkaan ku dar magaca qofka
        salan_magaca.textContent = magaca_la_qoray;
    }, 500);
});

theme_toggle.addEventListener("click",(e)=>{

document.documentElement.classList.toggle("dark");
theme_toggle.classList.toggle("text-orange-200")
if (document.documentElement.classList.contains("dark")) {

 
        theme_icon.classList.replace("fa-moon", "fa-sun");
    } else {
        theme_icon.classList.replace("fa-sun", "fa-moon");
    }


})



