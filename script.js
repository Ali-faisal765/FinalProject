

     $(window).on('load', function () {
    setTimeout(function () {
      $('#loader').fadeOut(600);
    }, 2500);
  });
    $(document).ready(function () {
      $('.image-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
      });

      $('.newsletter-form').on('submit', function (e) {
        e.preventDefault();
        const email = $('#newsletter-email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
          $('#newsletter-msg').text("Thank you for subscribing!").fadeIn().delay(3000).fadeOut();
          $('#newsletter-email').val('');
        } else {
          $('#newsletter-msg').text("Please enter a valid email address.").fadeIn().delay(3000).fadeOut();
        }
      });

      $('#searchButton').on('click', function () {
        const query = $('#searchInput').val().toLowerCase().trim();
        if (!query) return;

        $("body").find("mark").each(function () {
          $(this).replaceWith($(this).text());
        });

        const bodyText = $("body *:not(script)").contents().filter(function () {
          return this.nodeType === 3 && $(this).text().toLowerCase().includes(query);
        });

        if (bodyText.length > 0) {
          const found = bodyText.first();
          const html = found.text().replace(new RegExp('(' + query + ')', 'i'), '<mark>$1</mark>');
          found.replaceWith(html);
          $('html, body').animate({ scrollTop: $('mark').offset().top - 100 }, 600);
        }
      });
    });


    /* menu page */


          $(window).on('load', function () {
    setTimeout(function () {
      $('#loader').fadeOut(600);
    }, 2500);
  });
    $(document).ready(function () {
      $('.meal-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev" style="background:#ffab4c; border:none; border-radius:50%; width:35px; height:35px; color:#fff;">‹</button>',
        nextArrow: '<button type="button" class="slick-next" style="background:#ffab4c; border:none; border-radius:50%; width:35px; height:35px; color:#fff;">›</button>',
      });

      $('.tab-button').on('click', function () {
        var tabId = $(this).data('tab');
        $('.tab-button').removeClass('active');
        $(this).addClass('active');
        $('.carousel-wrapper').hide();
        $('#' + tabId).show();
      });


      $('#searchButton').on('click', function () {
        const query = $('#searchInput').val();
        if (query.trim() !== "") {
          alert("Searching for: " + query);
        }
      });

      document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", () => {
          const toast = document.getElementById("toast");
          toast.textContent = "Item added to cart";
          toast.style.display = "block";
          setTimeout(() => {
            toast.style.display = "none";
          }, 2000);
        });
      });
    });


   /* reserve page */



    
              $(window).on('load', function () {
    setTimeout(function () {
      $('#loader').fadeOut(600);
    }, 2500);
  });
    document.getElementById("reservation-form").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Reservation submitted successfully!");
      this.reset();
    });


    

  /* contact page */
 
  // $(document).ready(function () {
  //   $('.faq-question').click(function () {
  //     $(this).next('.faq-answer').slideToggle();
  //     $('.faq-answer').not($(this).next()).slideUp(); 
  //   });
  // });

   

      $(window).on('load', function () {
    setTimeout(function () {
      $('#loader').fadeOut(600);
      }, 2500);
  });