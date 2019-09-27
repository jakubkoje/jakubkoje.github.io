$(document).ready(function() {
  $(".home-nav").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("body").offset().top
      },
      400
    );
  });
  $(".onas-nav").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".first").offset().top
      },
      400
    );
  });
  $(".hybrid-lab-nav").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".labs").offset().top
      },
      1500
    );
  });
  $(".games-lab-nav").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".labs").offset().top
      },
      1500
    );
  });
  $(".kontakt-nav").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".newsletter").offset().top
      },
      2000
    );
  });
  $(".submit-btn").click(function(event) {
    $(".email").each(function() {
      let email = $.trim($(this).val());
      if (email == 0) {
        //alert($.trim($(this).val()));
        $(this).css({ "background-color": "red" });
        event.preventDefault();
      } else if (
        !email.includes("@") ||
        !email.includes(".") ||
        email.includes(" ")
      ) {
        $(this).css({ "background-color": "red" });
        event.preventDefault();
      } else {
        event.preventDefault();
        console.log("email sent");
      }
    });
  });
  $(".email").keyup(function() {
    if ($(this).css("background-color") == "rgb(255, 0, 0)")
      $(this).css({ "background-color": "#071f58" });
  });

  $(".card2").draggable({});

  $(".card2").mousedown(function() {
    $(this).css({
      background:
        '#999999 url("https://i.imgur.com/9RzwtFB.png") no-repeat scroll 50% 50% / contain padding-box border-box'
    });
  });
  $(".card2").mouseup(function() {
    $(this).css({
      background:
        'rgb(255, 255, 255) url("http://openlab-web.teo.sk/themes/demo/assets/assets/social_icons.png") no-repeat scroll 50% 50% / contain padding-box border-box'
    });
  });
});
