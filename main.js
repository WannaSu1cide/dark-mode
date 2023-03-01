const lightMode = document.querySelector(".light__mode");
const wrapper = document.querySelector(".wrapper")
const darkMode =document.querySelector(".dark__mode")
const btn = document.querySelector(".btn");
let light = false;
let body = document.querySelector("body")
    
function all(){
    if(light===true){
        wrapper.classList.add("light__mode__transform");
        btn.classList.add("btn__light__transform");
        wrapper.classList.remove("dark__mode__transform");
        btn.classList.remove("btn__dark__transform");
        lightMode.style.display = "block";
        darkMode.style.display="none" ;
        body.style.background = "white";    
        light = false;   
   }else {
    btn.classList.remove("btn__light__transform");
    wrapper.classList.remove("light__mode__transform");
    wrapper.classList.add("dark__mode__transform");
    btn.classList.add("btn__dark__transform");
    darkMode.style.display = "block";
    lightMode.style.display ="none";
    body.style.background = "black" ;   
    light= true;
   }
};



// click the body of the wrap
wrapper.addEventListener("click" ,function function1(){
    all();
});
btn.addEventListener("click",()=>{
  function1();    
})