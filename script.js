const mobailBtn=document.querySelector(".mobail-navbar-btn");
const header=document.getElementById("header")

// const sticky=header.offsetTop;

const toggleMenu=()=>{
    header.classList.toggle("active")
    
    
    
    
}
mobailBtn.addEventListener("click",()=>toggleMenu())

window.addEventListener("scroll",function(){
    const header2=document.getElementById("header")
    console.log(window.pageXOffset);
    if(window.pageYOffset>=50){
        header2.classList.add("sticky")
    }else{
        header2.classList.remove("sticky")
    }


})
