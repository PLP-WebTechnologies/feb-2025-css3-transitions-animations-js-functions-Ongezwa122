// External JavaScript File: java7.js

document.addEventListener("DOMContentLoaded", () => {
  // Gallery image cycling
  let currentImg = 0;
  const images = document.querySelectorAll("#gallery img");

  function nextImage() {
    images[currentImg].classList.remove("active");
    currentImg = (currentImg + 1) % images.length;
    images[currentImg].classList.add("active");
  }

  // Hook up Change Image button
  const changeBtn = document.getElementById("changeBtn");
  changeBtn.onclick = () => {
    nextImage();
    triggerAnimation();
  };

  // Secret double-click action
  const secret = document.getElementById("secret");
  changeBtn.addEventListener("dblclick", () => {
    secret.style.display = "block";
  });

  // Keypress detection
  document.addEventListener("keypress", (e) => {
    console.log(`You pressed: ${e.key}`);
  });

  // Tabs switching
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.tab;
      document
        .querySelectorAll(".tab-content")
        .forEach((el) => el.classList.remove("active-tab"));
      document.getElementById(id).classList.add("active-tab");
    });
  });

  // Form validation
  const emailInput = document.getElementById("email");
  const passInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passError = document.getElementById("passError");
  const form = document.getElementById("signupForm");

  // Load user preferences from localStorage
  const storedEmail = localStorage.getItem("userEmail");
  if (storedEmail) {
    emailInput.value = storedEmail;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;
    emailError.textContent = "";
    passError.textContent = "";

    if (!emailInput.value.includes("@")) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    }

    if (passInput.value.length < 8) {
      passError.textContent = "Password must be at least 8 characters.";
      valid = false;
    }

    if (valid) {
      alert("Form submitted successfully!");
      localStorage.setItem("userEmail", emailInput.value); // Save to localStorage
      form.reset();
    }
  });

  // Real-time feedback
  emailInput.addEventListener("input", () => {
    emailError.textContent = emailInput.value.includes("@")
      ? ""
      : "Invalid email format";
  });

  passInput.addEventListener("input", () => {
    passError.textContent =
      passInput.value.length >= 8 ? "" : "Min 8 characters";
  });

  // Animation function triggered by user action
  function triggerAnimation() {
    changeBtn.classList.add("pulse");
    setTimeout(() => {
      changeBtn.classList.remove("pulse");
    }, 500);
  }
});
