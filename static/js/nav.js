
// Getting ham and ul from navigation
const ham = document.getElementById("ham");
const ul = document.getElementById("nav-ul");

// Hide and show
const hideElement =(element)=>element.classList.replace("visible", "invisible") || element.classList.add("invisible");
const showElement =(element)=>element.classList.replace("invisible", "visible") || element.classList.add("visible");

// Function to run on resize
function switch_ham(){
   if(window.innerWidth > 1000){
      hideElement(ham);
      showElement(ul);
   }else{    
      hideElement(ul);
      showElement(ham);
   };
};


//Event listener for resize 
window.addEventListener('resize', switch_ham);

//Run it onload
window.onload = switch_ham;


// Ham ON/OFF
const ham_on_off = () => {
   if (ul.classList.contains("invisible")){
      showElement(ul)
   }else{   
      hideElement(ul)
   }
};
ham.onclick = ham_on_off;

// Required HTML code

// Give "nav-ul" and "ham" IDs

// Required CSS code

// .visible{
//     display: block;
// }
// .invisible{
//     display: none;
// }

