(function ($) {
  "use strict";

  // Preloader 
  jQuery(window).on('load', function () {
    jQuery("#status").fadeOut();
    jQuery("#preloader").delay(350).fadeOut("slow");
  });

  // on ready function
  jQuery(document).ready(function ($) {
    var $this = $(window);

    // Menu js for Position fixed
    $(window).scroll(function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 100) {
        $('.plumb_nav_header_wrapper, .mobail_menu').addClass('menu_fixed');
      } else {
        $('.plumb_nav_header_wrapper, .mobail_menu').removeClass('menu_fixed');
      }
    });


    // -------------------------------------------------------------
    // Shuffle
    // -------------------------------------------------------------

    $(window).load(function () {
      /** this is come when complete page is fully loaded, including all frames, objects and images **/

      if ($('#gridWrapper').length > 0) {

        /* initialize shuffle plugin */
        var $grid = $('#gridWrapper');

        $grid.shuffle({
          itemSelector: '.portfolio-wrapper' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').on('click', function (e) {
          e.preventDefault();

          // set active class
          $('#filter a').removeClass('active');
          $(this).addClass('active');

          // get group name from clicked item
          var groupName = $(this).attr('data-group');

          // reshuffle grid
          $grid.shuffle('shuffle', groupName);
        });
      }
    });

    /*------------------OWL MAIN SLIDER-------------------------*/

    $(document).ready(function () {
      var owl = $('.plumb_slider_img_section .owl-carousel');
      owl.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 1200,
        navText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>'],
        items: 1

      });


      function setAnimation(_elem, _InOut) {
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        _elem.each(function () {
          var $elem = $(this);
          var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

          $elem.addClass($animationType).one(animationEndEvent, function () {
            $elem.removeClass($animationType);
          });
        });
      }

      owl.on('change.owl.carousel', function (event) {
        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-out]");
        setAnimation($elemsToanim, 'out');
      });

      owl.on('changed.owl.carousel', function (event) {

        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-in]");
        setAnimation($elemsToanim, 'in');
      })

    });



 

    $(document).ready(function () {
      $('.plumb_about_video_section .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 1,
            nav: true
          },
          1000: {
            items: 1,
            nav: true,
            loop: true,
            margin: 20
          }
        }
      })
    })


    $(document).ready(function () {
      $('.plumber_about_slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 1,
            nav: true
          },
          1000: {
            items: 1,
            nav: true,
            loop: true,
            margin: 20
          }
        }
      })
    })

    $(document).ready(function () {
      $('.progress_slider .owl-carousel').owlCarousel({

        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 1,
            nav: true
          },
          1000: {
            items: 1,
            nav: true,
            loop: true,
            margin: 20
          }
        }
      })
    })

    $(document).ready(function () {
      $('.plumb_news_slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 1,
            nav: true
          },
          1000: {
            autoplay: true,
            items: 3,
            nav: true,
            loop: true,
            margin: 20
          }
        }
      })
    })


    $(document).ready(function () {
      $('.plumb_team_slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            nav: true
          },
          1000: {
            items: 5,
            nav: true,
            loop: true,
            margin: 20
          }
        }
      })
    })


    $(document).ready(function () {
      $("#clients-partners-logo").owlCarousel({
        items: 7.4,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 4000,
        autoplaySpeed: 4000,
        responsive: {
            1920:{
                items: 7.4,
            },
            1440:{
                items: 6.4,
            },
            1366:{
                items: 6.4,
            },
            1280:{
                items: 6.2,
            },
            1024: {
                items: 5.1,
                margin:20,
            },
            768: {
                items: 4.1,
                margin:20,
            },

            640: {
                items: 3.8,
                margin:15,
            },

            320: {
                items: 2.8,
                margin:10,
            }
        }
      })
    })


    $(document).ready(function () {
      $('.blog_service_slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 1,
            nav: true
          },
          1000: {
            items: 1,
            nav: true,
            loop: true,
            margin: 20
          }
        }
      })
    })


    $(document).ready(function () {
      $('.gallerymr .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsiveClass: true,
        navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 7000
          },
          600: {
            items: 1,
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 7000
          },
          1000: {
            items: 1,
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 7000,
            margin: 20
          }
        }
      })
    })


    // Tweeter Slider	
    $('.btn-vertical-slider').on('click', function () {

      if ($(this).attr('data-slide') == 'next') {
        $('#myCarousel').carousel('next');
      }
      if ($(this).attr('data-slide') == 'prev') {
        $('#myCarousel').carousel('prev')
      }

    });


    // Responsive Menu Events
    var addActiveClass = false;
    $("#mainMenu li.dropdown > a, #mainMenu li.dropdown-submenu > a").on("click", function (e) {
      if ($this.width() > 979) { return; }
      e.preventDefault();
      addActiveClass = $(this).parent().hasClass("resp-active");
      $("#mainMenu").find(".resp-active").removeClass("resp-active");
      if (!addActiveClass) {
        $(this).parents("li").addClass("resp-active");
      }

      return;

    });


    // Magnific popup-video
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });


    $('.zoom_popup').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr('title') + '<small></small>';
        }
      }
    });

    $('.plumb_service_text').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr('title') + '<small></small>';
        }
      }
    });





    //-------------------------------------------------------
    // progress-bar
    //-------------------------------------------------------

    $(document).ready(function () {
      $('.progress .progress-bar').css("width",
        function () {
          return $(this).attr("aria-valuenow") + "%";
        }
      )
    });


    //-------------------------------------------------------
    // counter-section
    //-------------------------------------------------------
    $('.counter-section').on('inview', function (event, visible, visiblePartX, visiblePartY) {
      if (visible) {
        $(this).find('.timer').each(function () {
          var $this = $(this);
          $({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        $(this).off('inview');
      }
    });


  });
})();

// ===== Scroll to Top ==== 
$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $('#return-to-top').fadeIn(200);
  } else {
    $('#return-to-top').fadeOut(200);
  }
});
$('#return-to-top').on('click', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});

// ===== Load More ==== 

$(function () {
  $(".moreBox").slice(0, 6).show();
  $("#loadMore").on('click', function (e) {
    e.preventDefault();
    $(".moreBox:hidden").slice(0, 6).slideDown();
    if ($(".moreBox:hidden").length == 0) {
      $("#loadMore").fadeOut('slow');
    }
    $('html,body').animate({
      scrollTop: $("#loadMore").offset().top - 150
    }, 1500);
  });
});


// ===== hidden inputs ====

var cpath = document.URL;
var uagent = navigator.userAgent;
$(document).ready(function () {
  $('input[name="current_path"]').val(cpath);
  $('input[name="user_agent"]').val(uagent);
});

//

var amount = parseInt($('#amount').val());
var i = parseInt($('#count').val());
var tim;

function run() {
  tim = setInterval(function () {
    if (i >= amount) { clearInterval(tim); return; }
    $('#count').val(++i);
  }, 100);
}
run();

//


// ===== next and back slide of customise form  ====
jQuery().ready(function () {

  // validate form on keyup and submit
  var v = jQuery("#basicform").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 16
      },
      mobile: {
        required: true,
        minlength: 10,
        number: true,
        maxlength: 14,
      },
      email: {
        required: true,
        email: true,
      },
      address: {
        required: true,
      },
      furniture: {
        required: true
      },
      furniture_sub: {
        required: true
      },
      cushion_color: {
        required: true,
      },
      wicker: {
        required: true,
      },
      checkbox: {
        required: true,
      }

    },
    errorElement: "span",
    errorClass: "help-inline-error",
    errorPlacement: function (error, element) {
      var name = $(element).attr("name");
      error.appendTo($("#basic_" + name + "_validate"));
    },

    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "https://www.restaurantfurnitureindia.com/insertdata.php",
        data: $("#basicform").serialize(),
        datatype: 'html',
        success: function (data) {
          if (data == "success") {
            window.location.href = "https://www.restaurantfurnitureindia.com/thank-you.html";
          } else {
            $(".messagebox1").html(data);
          }
        }
      });
      return false;
    }
  });
  $(".open1").click(function () {
    if (v.form()) {
      $(".frm").hide("fast");
      $("#sf2").show("slow");
    }
  });
  $(".open2").click(function () {
    if (v.form()) {
      $(".frm").hide("fast");
      $("#sf3").show("slow");
    }
  });
  $(".open3").click(function () {
    if (v.form()) {
      $(".frm").hide("fast");
      $("#sf4").show("slow");
    }
  });
  $(".open4").click(function () {
    if (v.form()) {
      $(".frm").hide("fast");
      $("#sf5").show("slow");
    }
  });
  $(".open5").click(function () {
    if (v.form()) {
      $(".frm").hide("fast");
      $("#sf6").show("slow");
    }
  });
  $(".open6").click(function () {
    if (v.form()) {
      $("#loader").show();
      return true;
    }
  });

  $(".back2").click(function () {
    $(".frm").hide("fast");
    $("#sf1").show("slow");
  });
  $(".back3").click(function () {
    $(".frm").hide("fast");
    $("#sf2").show("slow");
  });
  $(".back4").click(function () {
    $(".frm").hide("fast");
    $("#sf3").show("slow");
  });
  $(".back5").click(function () {
    $(".frm").hide("fast");
    $("#sf4").show("slow");
  });
  $(".back6").click(function () {
    $(".frm").hide("fast");
    $("#sf5").show("slow");
  });

});


// validate contact page form on keyup and submit
var v = jQuery("#contact_form").validate({
  rules: {
    name: {
      required: true,
      minlength: 2,
      maxlength: 16
    },
    mobile: {
      required: true,
      minlength: 10,
      number: true,
      maxlength: 14
    },
    email: {
      required: true,
      email: true
    },
    furniture: {
      required: true,
    },
    furniture_sub: {
      required: true,
    },
    address: {
      required: true,
    },
    checkbox: {
      required: true,
    }

  },
  // Specify the validation error messages
  messages: {
    name: "Please enter your name",
    email: {
      required: "Please enter your email address",
      email: "Please enter a valid email address",
    },
    mobile: {
      required: "Please enter mobile no.",
      number: "Mobile No. contains only numbers",
      minlength: "Mobile No. must be 10 Digits",
      maxlength: "Please enter Valid mobile no."
    },

  },
  errorElement: "span",
  errorClass: "help-inline-error",
  errorPlacement: function (error, element) {
    var name = $(element).attr("name");
    error.appendTo($("#contact_" + name + "_validate"));
  },

  submitHandler: function (form) {
    $.ajax({
      type: "POST",
      url: "https://www.restaurantfurnitureindia.com/insertdata.php",
      data: $("#contact_form").serialize(),
      datatype: 'html',
      success: function (data) {
        if (data == "success") {
          window.location.href = "https://www.restaurantfurnitureindia.com/thank-you.php";
        } else {
          $(".messagebox").html(data);
        }
      }
    });
    return false;
  }
});

// validate contact page form on keyup and submit
var v = jQuery("#sideform").validate({
  rules: {
    name: {
      required: true,
      minlength: 2,
      maxlength: 16
    },
    mobile: {
      required: true,
      minlength: 10,
      number: true,
      maxlength: 14
    },
    email: {
      required: true,
      email: true
    },
    checkbox: {
      required: true,
    }

  },
  // Specify the validation error messages
  messages: {
    name: "Please enter your name",
    email: {
      required: "Please enter your email address",
      email: "Please enter a valid email address",
    },
    mobile: {
      required: "Please enter mobile no.",
      number: "Mobile No. contains only numbers",
      minlength: "Mobile No. must be 10 Digits",
      maxlength: "Please enter Valid mobile no."
    },

  },
  errorElement: "span",
  errorClass: "help-inline-error",
  errorPlacement: function (error, element) {
    var name = $(element).attr("name");
    error.appendTo($("#sideform_" + name + "_validate"));
  },

  submitHandler: function (form) {
    $("#sideform_submit").attr("disabled", true);
    $.ajax({
      type: "POST",
      url: "https://www.restaurantfurnitureindia.com/insertdata.php",
      data: $("#sideform").serialize(),
      datatype: 'html',
      success: function (data) {
        if (data == "success") {
          window.location.href = "https://www.restaurantfurnitureindia.com/thank-you.php";
        } else {
          $(".sidemessagebox4").html(data);
          $("#sideform_submit").attr("disabled", false);
        }
      }
    });
    return false;
  }
});





// ===== product and sample js code ==== 
$(document).ready(function () {
  var url = "https://www.restaurantfurnitureindia.com/js/sample.json";
  $.getJSON(url, function (data) {
    $.each(data.main, function (index, value) {
      // APPEND OR INSERT DATA TO SELECT ELEMENT.
      $('#sel').append('<option value="' + value.value + '">' + value.text + '</option>');
    });
  });
  // SHOW SELECTED VALUE.
  $('#sel').change(function () {
    var value = $('#sel option:selected').val();
    $('#sub').empty();
    $.getJSON(url, function (swat) {
      $.each(swat[value], function (index, value) {
        // APPEND OR INSERT DATA TO SELECT ELEMENT.                    
        $('#sub').append('<option value="' + value.value + '">' + value.text + '</option>');
      });
    });
  });
});
$(document).ready(function () {
  var url = "https://www.restaurantfurnitureindia.com/js/product.json";
  $.getJSON(url, function (data) {
    $.each(data.main, function (index, value) {
      // APPEND OR INSERT DATA TO SELECT ELEMENT.
      $('#pro').append('<div class="col-sw-3 col-xs-4 img-color-box"><input type="radio" name="furniture" id="' + value.value + '" class="input-hidden" value="' + value.value + '"><label for="' + value.value + '"><img src="img/icons/' + value.img + '" alt="' + value.value + '" class="img-color-pattern"></label><p>' + value.value + '</p></div>');
    });
  });
  // SHOW SELECTED VALUE.
  $('#pro').change(function () {
    var value = $("input[name='furniture']:checked").val();
    $('#pro-sub').empty();
    $.getJSON(url, function (swat) {
      $.each(swat[value], function (index, value) {
        // APPEND OR INSERT DATA TO SELECT ELEMENT.                    
        $('#pro-sub').append('<div class="col-sw-3 col-xs-4 img-color-box"><input type="radio" name="furniture_sub" id="' + value.value + '" class="input-hidden" value="' + value.value + '"><label for="' + value.value + '"><img src="img/icons/' + value.img + '" alt="' + value.value + '" class="img-color-pattern"></label><p>' + value.value + '</p></div>');
      });
    });
  });
});
$(document).ready(function () {
  var url = "https://www.restaurantfurnitureindia.com/js/product.json";
  $.getJSON(url, function (data) {
    $.each(data.cushion_color, function (index, value) {
      // APPEND OR INSERT DATA TO SELECT ELEMENT.
      $('#cushion').append('<div class="col-lg-2 col-xs-3 img-color-box"><input type="radio" name="cushion_color" id="' + value.value + '" class="input-hidden" value="' + value.value + '"><label for="' + value.value + '"><img src="img/color-pattern/cushion-color/' + value.img + '" alt="' + value.value + '" class="img-color-pattern"></label><p>' + value.value + '</p></div>');
    });
  });
});

$(document).ready(function () {
  var url = "https://www.restaurantfurnitureindia.com/js/product.json";
  $.getJSON(url, function (data) {
    $.each(data.wicker, function (index, value) {
      // APPEND OR INSERT DATA TO SELECT ELEMENT.
      $('#wicker_color').append('<div class="col-lg-2 col-xs-3 img-color-box"><input type="radio" name="wicker" id="' + value.value + '" class="input-hidden" value="' + value.value + '"><label for="' + value.value + '"><img src="img/color-pattern/wicker-color/' + value.img + '" alt="' + value.value + '" class="img-color-pattern"></label><p>' + value.value + '</p></div>');
    });
  });
});


// ===== Client Load More ==== 

$(function () {
  $(".clientmoreBox").slice(0, 24).show();
  $("#clientloadMore").on('click', function (e) {
    e.preventDefault();
    $(".clientmoreBox:hidden").slice(0, 24).slideDown();
    if ($(".clientmoreBox:hidden").length == 0) {
      $("#clientloadMore").fadeOut('slow');
    }
    $('html,body').animate({
      scrollTop: $(this).offset().top - 100
    }, 1500);
  });
});


$(document).ready(function () {
  var url = "https://www.restaurantfurnitureindia.com/js/client.json";
  $.getJSON(url, function (data) {
    $.each(data.client_b, function (index, value) {
      // APPEND OR INSERT DATA TO SELECT ELEMENT.
      $('#client').append('<div class="col-lg-2 col-md-2 col-sm-3 col-xs-4"><div class="plumb_special_main_cont_wrapper plumb_special_main_cont_wrapper_inner  clientmoreBox"><div class="plumb_special_cont_overlay_wrapper"><img src="img/clients/' + value.img + '" class="img-responsive" alt=""></div></div></div>');
    });
    $.each(data.client_n, function (index, value) {
      // APPEND OR INSERT DATA TO SELECT ELEMENT.
      $('#client').append('<div class="col-lg-2 col-md-2 col-sm-3 col-xs-4"><div class="plumb_special_main_cont_wrapper plumb_special_main_cont_wrapper_inner  clientmoreBox" style="display: none;"><div class="plumb_special_cont_overlay_wrapper"><img src="img/clients/' + value.img + '" class="img-responsive" alt=""></div></div></div>');
    });
  });
});

// validate index page Fast enquiry form on keyup and submit
var v = jQuery("#fenquiry_form").validate({
  rules: {
    name: {
      required: true,
      minlength: 2,
      maxlength: 16
    },
    email: {
      required: true,
      email: true
    }

  },
  // Specify the validation error messages
  messages: {
    name: "Please enter your name",
    email: {
      required: "Please enter your email address",
      email: "Please enter a valid email address",
    }

  },
  errorElement: "span",
  errorClass: "help-inline-error",
  errorPlacement: function (error, element) {
    var name = $(element).attr("name");
    error.appendTo($("#fenquiry_" + name + "_validate"));
  },

  submitHandler: function (form) {
    $.ajax({
      type: "POST",
      url: "https://www.restaurantfurnitureindia.com/insertdata.php",
      data: $("#fenquiry_form").serialize(),
      datatype: 'html',
      success: function (data) {
        if (data == "success") {
          window.location.href = "https://www.restaurantfurnitureindia.com/thank-you.php";
        } else {
          $(".messagebox").html(data);
        }
      }
    });
    return false;
  }
});


