let toggleTheme = document.getElementById("toggleTheme");
let icon = document.getElementById("icon");
toggleTheme.addEventListener("click", (e) => {
    e.preventDefault();
    let element = document.body;    
    element.classList.toggle("dark");    
    if(icon.className=="fa-solid fa-moon"){
        icon.className = "fa-solid fa-sun";
      }else{
        icon.className = "fa-solid fa-moon";
      }        
})