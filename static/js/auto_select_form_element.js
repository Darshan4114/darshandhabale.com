let be = document.querySelector("#backend-service");
let fr = document.querySelector("#frontend-service");
let fs = document.querySelector("#fullstack-service");
choices = [be, fr, fs]

choices.forEach(element => {
   element.addEventListener("click", () => {
    let choice = element.dataset.dev
    let form = document.forms['contact-form']
    let select_element = form.elements['development']
    console.log(select_element)
    select_element.value = choice
    a.innerHTML = element.children[0].children[1].innerText.split(" ")[0]
   })
});
let form = document.forms['contact-form']
form.addEventListener("submit", ()=>console.log(form.dataset))