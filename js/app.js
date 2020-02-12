//UI Variables
const modal = document.querySelector(".modal");
const openModal = document.querySelectorAll(".portfolio__image--search");
const about1 = document.querySelector(".about-1");
const about2 = document.querySelector(".about-2");
const about3 = document.querySelector(".about-3");
const about4 = document.querySelector(".about-4");
const about5 = document.querySelector(".about-5");
const about6 = document.querySelector(".about-6");

//Event listener to open modal

//Loop through the 6 portfolio items
for(let i = 0; i < openModal.length; i++){
    console.log(openModal);

//Apply event listener to each item
    openModal[i].addEventListener("click", e => {
        modal.style.display = "block";

        console.log(openModal[3])

        if(e.target.classList.contains("modal-1")){
            about1.style.display = "block";
            about2.style.display = "none";
            about3.style.display = "none";
            about4.style.display = "none";
            about5.style.display = "none";
            about6.style.display = "none";
        } else if (e.target.classList.contains("modal-2")){
            about1.style.display = "none";
            about2.style.display = "block";
            about3.style.display = "none";
            about4.style.display = "none";
            about5.style.display = "none";
            about6.style.display = "none";
        } else if (e.target.classList.contains("modal-3")){
            about1.style.display = "none";
            about2.style.display = "none";
            about3.style.display = "block";
            about4.style.display = "none";
            about5.style.display = "none";
            about6.style.display = "none";
        } else if (e.target.classList.contains("modal-4")){
            about1.style.display = "none";
            about2.style.display = "none";
            about3.style.display = "none";
            about4.style.display = "block";
            about5.style.display = "none";
            about6.style.display = "none";
        } else if (e.target.classList.contains("modal-5")){
            about1.style.display = "none";
            about2.style.display = "none";
            about3.style.display = "none";
            about4.style.display = "none";
            about5.style.display = "block";
            about6.style.display = "none";
        } else if (e.target.classList.contains("modal-6")){
            about1.style.display = "none";
            about2.style.display = "none";
            about3.style.display = "none";
            about4.style.display = "none";
            about5.style.display = "none";
            about6.style.display = "block";
        }
    });
}

//To close modal
modal.addEventListener("click", e => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});