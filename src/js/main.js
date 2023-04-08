const tabs = document.querySelectorAll(".head[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");
let toggleTheme = document.getElementById("toggleTheme");

const idiom = document.querySelector(".idioma[data-target]");
const contentId = document.querySelectorAll("[data-content='idiom']");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)
    tabContents.forEach(tc => {
      tc.classList.remove('options__active')
    })
    target.classList.add("options__active")
  })
})
toggleTheme.addEventListener("click", (e) => {
  e.preventDefault();
  let element = document.body;
  element.classList.toggle("dark");
  if (icon.className == "fa-solid fa-moon") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
})


idiom.addEventListener("click", (tab) => {
  
  const target = document.querySelectorAll(tab.target.dataset.target)
  contentId.forEach(tc => {
    tc.classList.remove('desc__active')
    console.log(tc.id)
    
  })      
  tab.target.dataset.target = tab.target.dataset.target == "#en"  ? "#es"  :"#en"
  target.forEach(tc =>{
    tc.classList.add("desc__active")
  })
  
})
/*
function idioma(event){
  event.preventDefault();
  console.log(event.target.dataset.target)
  

}
*/
