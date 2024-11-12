$(document).ready(function () {
      $(window).scroll(function () {
            //  sticky navbar on scroll script  //
            if (this.scrollY > 20) {
                  $(".navbar").addClass("sticky");
            } else {
                  $(".navbar").removeClass("sticky");
            }

            //  scroll-up button show/hide script  //
            if (this.scrollY > 500) {
                  $(".scroll-up-btn").addClass("show");
            } else {
                  $(".scroll-up-btn").removeClass("show");
            }
      });

      //  slide-up script  //

      $(".scroll-up-btn").click(function () {
            $("html").animate({ scrollTop: 0 });
            //  removing smooth scroll on slide-up button click  //
            $("html").css("scrollBehavior", "auto");
      });

      $(".navbar .menu li a").click(function () {
            //  Smooth scroll on Menu Items click  //

            $("html").css("scrollBehavior", "smooth");
      });

      //  Toggle Navbar  //

      $(".menu-btn").click(function () {
            $(".navbar .menu").toggleClass("active");
            $(".menu-btn i").toggleClass("active");
      });

      //  Typing Text Animation  //

      var typed = new Typed(".typing", {
            strings: [
                  "frontend Developer",
                  "Website Developer",
                  "Graphics Designer",
                  "Web Developer",
                  "Web designer"
            ],
            typeSpeed: 200,
            backSpeed: 60,
            loop: true
      });

      var typed = new Typed(".typing-2", {
            strings: [
                  "Frontend Developer",
                  "at Debre Berhan University",
                  "Computer Science Student",
                  "Debre Berhan University",
                  "study COMPUTER SCIENCE"
            ],
            typeSpeed: 200,
            backSpeed: 60,
            loop: true
      });

      //  Owl Carousel  //

      $(".carousel").owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                  0: {
                        items: 1,
                        nav: false
                  },
                  600: {
                        items: 2,
                        nav: false
                  },
                  1000: {
                        items: 3,
                        nav: false
                  }
            }
      });
});

function handleSubmit(event) {
      event.preventDefault(); // Prevent form from refreshing the page

      // Get form values
      const name = document.getElementById('userName').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('userMessage').value.trim();

      // Basic validation (can be expanded)
      if (name && email && subject && message) {
            // Show success message
            document.getElementById('successMessage').style.display = 'block';

            // Reset the form
            document.getElementById('messageForm').reset();

            // Hide the success message after 3 seconds
            setTimeout(() => {
                  document.getElementById('successMessage').style.display = 'none';
            }, 3000);
      } else {
            alert('Please fill out all the fields.');
      }
}
