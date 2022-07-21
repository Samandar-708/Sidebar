const sidebar= document.querySelector('.sidebar');




const navMenu=document.querySelector("#navMenu");
navMenu.addEventListener("click", ()=> {
    navMenu.classList.toggle('active')
})


navMenu.addEventListener('click', ()=>{
    sidebar.classList.toggle('btn-active')
})

