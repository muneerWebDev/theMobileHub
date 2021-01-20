//global variables
var mainContainerWidth;
var mainContainerOffset;
var siteHeaderHeight;
var siteFooterHeight;
var mainBannerHeight;

$(document).ready(function () {


  //An imate On Scxroll init
  AOS.init({
    duration: 1000,
  })


  /* basic layouts and variables */
  dynamicCssVariables();
  $(window).resize(function () {
    dynamicCssVariables();
  });

  //calender basic setup
  basicCalenderSetup()


  /************card options  *************/
  optionsCArd();

  // giving a uid to each service 
  var optionID = 0;
  $(".select_options .card").each(function () {
    optionID++;
    $(this).attr("option-id", optionID);
  })


  // sliders 
  $(".homePage .mainBanner .slider").slick({
    arrows: true,
    infinite: false
  });
  $(".all-services-slider").slick({
    infinite: false,
    slidesToScroll: 2,
    slidesToShow: 4,
    arrows: true,
    nextArrow: "<button type='button' class='slick-next pull-right'></button>",
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  });


  //add class to body on scroll
  addClassToBodyIfScrolled();
  $(window).scroll(function () {
    addClassToBodyIfScrolled();
  });

});


// dynamic css variables
function dynamicCssVariables() {
  mainContainerWidth = jQuery(".container").width();
  mainContainerOffset = jQuery(".container").offset().left;
  siteHeaderHeight = jQuery("header.siteHeader").innerHeight();
  siteHeaderHeight = jQuery("header.siteHeader").innerHeight();
  mainBannerHeight = jQuery(".mainBanner").innerHeight();
  siteFooterHeight = jQuery("header.siteFooter").innerHeight();

  $("body").get(0).style.setProperty("--containerWidth", mainContainerWidth + "px");
  $("body").get(0).style.setProperty("--containerOffset", mainContainerOffset + "px");
  $("body").get(0).style.setProperty("--siteHeaderHeight", siteHeaderHeight + "px");
  $("body").get(0).style.setProperty("--siteFooterHeight", siteFooterHeight + "px");
  $("body").get(0).style.setProperty("--mainBannerHeight", mainBannerHeight + "px");
}



// card functionalities 

function optionsCArd() {
  function continueButton(show) {
    if (show > 0) {
      $(".selected_options .next_step").fadeIn("fast");
    } else {
      $(".selected_options .next_step").hide();
    }
  }

  $(".select_options .card").click(function () {
    $(this).toggleClass("selected");
    var option = $(this).attr("option-id");

    if ($(this).hasClass("selected")) {

      if (!$('.selected_options .selected-list .card[option-id="' + option + '"]').length) {
        var selectedCard = $(this).clone();
        $($(selectedCard).prepend("<span class='close'><i class='fas fa-check'></i></span>")).prependTo($(".selected_options .selected-list"));
      }

      continueButton($('.selected_options .selected-list .card').length);

    } else {
      $('.selected_options .selected-list .card[option-id="' + option + '"]').remove();

      continueButton($('.selected_options .selected-list .card').length);
    }

  });


  $('.selected_options').on('click', '.selected-list .card .close', function () {
    var option = $(this).closest(".card").attr("option-id");
    $('.select_options .card[option-id="' + option + '"]').removeClass("selected");
    $(this).closest(".card").fadeOut().delay(800).remove();

    continueButton($('.selected_options .selected-list .card').length);
  });
}


// calender setup

function basicCalenderSetup() {

  //col height setting 
  var calenderColumn = $(".icalendar__days > div");
  var calColumnWidth = $(calenderColumn).innerWidth();
  $(calenderColumn).height(calColumnWidth / 1.5);

  // cal activeSetting
  $(calenderColumn).each(function () {
    if ($(this).hasClass("icalendar__today"))
      $(this).addClass("active");
  });

  // selectable only for upcoming dates
  $(".icalendar__days .icalendar__today, .icalendar__days .icalendar__today~div").click(function () {
    $(calenderColumn).removeClass("active");
    $(this).addClass("active");
  })
}

//add class to body if scroll
function addClassToBodyIfScrolled() {

  if ($(window).scrollTop() > 5)
    $("body").addClass("scrolled");
  else
    $("body").removeClass("scrolled");


}