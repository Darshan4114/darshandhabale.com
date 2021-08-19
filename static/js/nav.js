// Getting ham and ul from navigation
const ham = document.querySelector("#ham");
const ul = document.querySelector("#nav-ul");

// Ham ON/OFF
ham.onclick = () => {
  ul.classList.toggle("show-ul");
  ham.classList.toggle("cross");
};
