// Add event listener to signup button
document.querySelector(".signup-btn").addEventListener("click", (e) => {
  e.preventDefault();
  // Get form values
  const fullName = document.querySelector("#full-name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  // Validate form values
  if (fullName && email && password) {
    // Signup logic here
    console.log("Signup successful!");
  } else {
    alert("Please fill in all fields!");
  }
});