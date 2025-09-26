// Initialize floating animations and active states
document.addEventListener("DOMContentLoaded", () => {
  // Set animation delays for buttons
  document.querySelectorAll(".action-cloud").forEach((button, index) => {
    button.style.setProperty("--i", index)
  })

  // Handle navigation active states
  document.querySelectorAll(".nav-item").forEach((navItem) => {
    navItem.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all nav items
      document.querySelectorAll(".nav-item").forEach((item) => {
        item.classList.remove("active")
      })

      // Add active class to clicked item
      this.classList.add("active")

      console.log("Navigation clicked:", this.textContent.trim())
    })

    // Enhanced hover effect for navigation
    navItem.addEventListener("mouseenter", function () {
      if (!this.classList.contains("active")) {
        this.style.transform = "translateY(-2px) scale(1.05)"
      }
    })

    navItem.addEventListener("mouseleave", function () {
      if (!this.classList.contains("active")) {
        this.style.transform = ""
      }
    })
  })

  // Handle action button active states and clicks
  document.querySelectorAll(".action-cloud").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all action buttons
      document.querySelectorAll(".action-cloud").forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked button
      this.classList.add("active")

      // Simple click animation
      this.style.transform = "scale(0.95)"

      setTimeout(() => {
        this.style.transform = ""
      }, 150)

      console.log("Action button clicked:", this.textContent.trim())
    })
  })

  // Set default active states
  document.querySelector(".nav-item").classList.add("active") // First nav item active
  document.querySelector(".action-cloud").classList.add("active") // First action button active
})
