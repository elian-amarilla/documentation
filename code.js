let $previewSelected = false;
const changeColorLI = () =>{
    if(!location.hash) return -1;
    document.querySelector(`${location.hash} header`).classList.add("color");
    if($previewSelected !== false) $previewSelected.classList.remove("color");
    $previewSelected = document.querySelector(`${location.hash} header`);
}


document.addEventListener("click", e=>{
    if(e.target.matches(".menu-item p")){
        e.target.nextElementSibling.classList.toggle("no-visible"); 
    }
    if(e.target.matches(".menu-item a")){
        console.log(e.target["data--title"])
    }
    if(e.target.matches("#btnMenu span") || e.target.matches("#btnMenu") || e.target.matches("#header-nav li")){
        const $btnMenu = document.getElementById("btnMenu");
        if($btnMenu.classList.contains("is-active")){
            document.getElementById("header-nav").classList.remove("active");
            $btnMenu.classList.remove("is-active");
        }else{
            document.getElementById("header-nav").classList.add("active");
            $btnMenu.classList.add("is-active");
        }
    }
    console.log(e.target)
});
window.addEventListener("DOMContentLoaded", e=>{
    changeColorLI();
})
window.addEventListener("hashchange",e=>{
    changeColorLI();
})
