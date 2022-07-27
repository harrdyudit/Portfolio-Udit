const mobailBtn=document.querySelector(".mobail-navbar-btn");
const header=document.getElementById("header")
const toggleMenu=()=>{
    header.classList.toggle("active")
  
    


}
mobailBtn.addEventListener("click",()=>toggleMenu())