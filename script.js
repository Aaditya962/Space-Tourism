//Navigation toggle script
const burger = document.querySelector(".burger");
const navigation=document.querySelector(".tabs");
const ltab=document.querySelectorAll(".ltab");



burger.addEventListener("click", () => {

    const visib=navigation.getAttribute("data-visible");
    if(visib === "false"){
    burger.classList.toggle("close");
    navigation.setAttribute("data-visible", true);
    burger.setAttribute("aria-expanded", true);
    }
    else if(visib === "true"){
    burger.classList.toggle("close");
    navigation.setAttribute("data-visible", false);
    burger.setAttribute("aria-expanded", false);
    }
});

ltab.forEach((link) => {
    link.addEventListener("click", () => {

        burger.classList.toggle("close");
        navigation.classList.toggle("nav-active");
    });
});