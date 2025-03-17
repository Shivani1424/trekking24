
document.addEventListener("DOMContentLoaded", function () {
const scrollWrapper = document.getElementById("scroll-wrapper");

// Duplicate the content to create a smooth infinite loop
if (scrollWrapper && scrollWrapper.innerHTML.trim() !== "") {
    scrollWrapper.innerHTML += scrollWrapper.innerHTML;
}


// Start GSAP animation
let scrollAnimation = gsap.to(scrollWrapper, {
    y: "-50%", // Moves half the content upward
    duration: 15, // Adjust speed for smooth effect
    ease: "none",
    repeat: -1 // Infinite loop
});

// Pause scrolling when hovering over a block
document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("mouseenter", () => scrollAnimation.pause());
    box.addEventListener("mouseleave", () => scrollAnimation.resume());
});
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});



document.addEventListener("DOMContentLoaded", function () {
    const scrollWrapper = document.getElementById("scroll-wrapper");

    if (window.innerWidth > 768) { // Apply animation only for larger screens
        gsap.to(scrollWrapper, {
            y: "-50%",
            duration: 15,
            ease: "none",
            repeat: -1
        });
    }
});



function showError(inputId, message) {
 var existingErrorBox = document.querySelector('.error-box');
 if (existingErrorBox) existingErrorBox.remove();

 var inputElement = document.getElementById(inputId);
 var errorBox = document.createElement("div");
 errorBox.className = "error-box";
 errorBox.innerHTML = message;

 var rect = inputElement.getBoundingClientRect();
 errorBox.style.top = rect.top + window.scrollY + inputElement.offsetHeight + 5 + "px";
 errorBox.style.left = Math.min(rect.left + window.scrollX, window.innerWidth - errorBox.offsetWidth - 10) + "px";


 document.body.appendChild(errorBox);

 setTimeout(() => errorBox.remove(), 2000);
};


document.addEventListener("DOMContentLoaded", function () {
 const rightCol = document.querySelector(".rightcol");

 // Get the height of the right column
 const columnHeight = rightCol.offsetHeight;

 // Function to create a snowflake
 function createSnowflake() {
     const snowflake = document.createElement("div");
     snowflake.classList.add("snowflake");

     // Random horizontal position within the right column
     snowflake.style.left = Math.random() * rightCol.offsetWidth + "px"; // Between 0 and the column width

     // Random size for variety (between 3px to 8px)
     const size = Math.random() * 5 + 3;
     snowflake.style.width = size + "px";
     snowflake.style.height = size + "px";
	 snowflake.style.opacity = Math.random() * 0.5 + 0.5; // Between 0.5 and 1
snowflake.style.transform = `rotate(${Math.random() * 360}deg)`;


     // Append snowflake to the right column
     rightCol.appendChild(snowflake);

     // Random animation duration (between 5s and 8s for falling)
     const animationDuration = Math.random() * 3 + 5; // Between 5s and 8s
     snowflake.style.animationDuration = animationDuration + "s";

     // Calculate the distance the snowflake will fall (stop at half the column height)
     const fallDistance = columnHeight / 2 + Math.random() * (columnHeight / 4); // Stop after half to three-quarters of the column height
     snowflake.style.animation = `snowfall ${animationDuration}s linear infinite`;

     // Set the stop point of the snowflake
     snowflake.style.animation = `snowfall ${animationDuration}s linear forwards`;

     // Remove the snowflake after it completes its animation
     setTimeout(() => {
         snowflake.remove();
     }, animationDuration * 1000); // Remove after animation duration
 }

 // Create snowflakes periodically (every 200ms)
 setInterval(createSnowflake, 200);
});



document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("btn2"); // Login button
    const inputFields = document.querySelectorAll(".details"); // All input fields

    // Function to check if all inputs are filled
    function validateInputs() {
        let allFilled = true;

        inputFields.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });

        if (allFilled) {
            loginBtn.removeAttribute("disabled"); // Enable button
        } else {
            loginBtn.setAttribute("disabled", "true"); // Disable button
        }
    }

    // Attach event listeners to all input fields
    inputFields.forEach(input => {
        input.addEventListener("input", validateInputs);
    });

    // Show error if button is clicked while fields are empty
    loginBtn.addEventListener("click", function (event) {
        let allFilled = true;

        inputFields.forEach(input => {
            if (input.value.trim() === "") {
                showError(input.id, "This field is required!"); // Show error near input
                allFilled = false;
            }
        });

        if (!allFilled) {
            event.preventDefault(); // Stop redirection
        } else {
            window.location.href = "index.html"; // Redirect only if all fields are filled
        }
    });

    // Function to show error message
    function showError(inputId, message) {
        var inputElement = document.getElementById(inputId);
        var errorBox = document.createElement("div");
        errorBox.className = "error-box";
        errorBox.innerHTML = message;

        var rect = inputElement.getBoundingClientRect();
        errorBox.style.position = "absolute";
        errorBox.style.background = "red";
        errorBox.style.color = "white";
        errorBox.style.padding = "5px";
        errorBox.style.borderRadius = "5px";
        errorBox.style.top = rect.top + window.scrollY + inputElement.offsetHeight + 5 + "px";
        errorBox.style.left = rect.left + window.scrollX + "px";

        document.body.appendChild(errorBox);

        setTimeout(() => errorBox.remove(), 2000);
    }

    // Initial check in case the form has pre-filled values
    validateInputs();
});



const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide-item');
let currentIndex = 0;

function moveToNextSlide() {
    // Remove the first slide and append a new one
    slideContainer.appendChild(slides[currentIndex]);
    currentIndex = (currentIndex + 1) % slides.length;
}

function moveToPrevSlide() {
    // Add the last slide to the beginning of the container
    slideContainer.prepend(slides[currentIndex]);
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
}

// Set up event listeners for the buttons
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);






