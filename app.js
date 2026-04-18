

const sign_up_form=document.querySelector("#sign_up_form");
const screen_two=document.querySelector("#screen_two");
const screen_one=document.querySelector("#screen_one");
const theme_toggle=document.querySelectorAll(".theme_toggle");
const screens=document.querySelector(".screens")
const salan_magaca=document.querySelector("#salan_magaca ")
const next_arrow=document.querySelector("#next_arrow")
const gb_space=document.querySelector("#gb_space");
const screen_three=document.querySelector("#screen_three")
const personal_btn=document.querySelector("#personal_btn")
const text_area_personal=document.querySelector("#text_area_personal");
const words_counter=document.querySelector(".words_counter");
const save_btn=document.querySelector(".save_btn");


sign_up_form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Qabo magaca qofka qoray
    
    
    // Animation-ka Arrow-ga
    next_arrow.classList.add("translate-x-full", "transition-transform");

    setTimeout(() => {
        screen_one.classList.replace("md:flex", "hidden");
        screen_two.classList.remove("hidden");
        
        // Halkaan ku dar magaca qofka
       
    }, 500);
});

theme_toggle.forEach((btn) => {
    btn.addEventListener("click", () => {
        // 1. Beddel Dark Mode-ka
        document.documentElement.classList.toggle("dark");

        // 2. Qabo icon-ka ku dhex jira button-ka la riixay
        const icon = btn.querySelector("i");

        // 3. Beddel icon-ka (Moon -> Sun)
        if (document.documentElement.classList.contains("dark")) {
            icon.classList.replace("fa-moon", "fa-sun");
            icon.classList.add("text-orange-300"); // Midabka qorraxda
        } else {
            icon.classList.replace("fa-sun", "fa-moon");
            icon.classList.remove("text-orange-300");
        }
    });
});

// personal_btn addvent switch screen
personal_btn.addEventListener("click",e=>{
    setTimeout(() => {
        screen_two.classList.add("hidden")
screen_three.classList.remove("hidden")
    }, 500);

})

// personal noteka meesha lagu qoro save
save_btn.addEventListener("click",e=>{
    e.preventDefault();
screen_three.classList.add("hidden")
screen_two.classList.remove("hidden")
const text_area_personal_saved_text=text_area_personal.value ;

personal_btn.addEventListener("click",e=>{
    setTimeout(() => {
        screen_two.classList.add("hidden")
screen_three.classList.remove("hidden")
text_area_personal+=text_area_personal_saved_text;

    }, 500);

})
});