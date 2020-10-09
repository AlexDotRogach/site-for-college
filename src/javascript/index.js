
$(document).ready(function(){
  /*variable for checking if navicon is active*/
  var isNavActive = false;

  /*change main menu statement by add or remove class*/
  $("#nav-open").click(function(){
    if (isNavActive == true) {
      $("header").removeClass("header-responsive");
      isNavActive = false;
    }
    else{
      $("header").addClass("header-responsive");
      isNavActive = true;
    }
  });

  /*animate hiding of main menu*/
  $("#nav-close").click(function(){
    $(".nav-menu").slideUp();
  });

  /*smooth scroll to section*/
  $("a").on('click', function(event) {

    if (this.hash !== "") {

    event.preventDefault();

      $('html, body').animate({
        scrollTop: $(this.hash).offset().top-30
      }, 800, function(){});
    }
  });
});

