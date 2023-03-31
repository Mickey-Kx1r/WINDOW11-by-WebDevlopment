taskbar = document.getElementsByClassName("tasksbar");
startmenu = document.getElementsByClassName("startmenu");

taskbar.addEventListener("click", ()=>{
    console.log("click");
if(startmenu.style.bottom == "50px"){
startmenu.style.bottom = "-655px"
}
else
startmenu.style.bottom = "50px"
})