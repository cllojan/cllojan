const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");    
let toggleTheme = document.getElementById("toggleTheme");


tabs.forEach(tab => {
  tab.addEventListener("click",() => {    
    console.log(tab.dataset.target)
    const target = document.querySelector(tab.dataset.target)
    const idTarget = document.getElementById(target);
    tabContents.forEach(tc =>{
      tc.classList.remove('options__active')
    })
    target.classList.add("options__active")
  })
})
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
