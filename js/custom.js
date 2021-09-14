




// $(window).scroll(function () {
//   if($(window).scrollTop() > 300) {
//     $(".navbar").addClass('sticky'), 500;
//   } else {
//     $(".navbar").removeClass('sticky'), 500;
//   }
// });


// sticky menu end

// back to top btn open
// ===== Scroll to Top ==== 
// jQuery(window).scroll(function() {
//     if (jQuery(this).scrollTop() >= 400) {        // If page is scrolled more than 50px
//         jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
//     } else {
//         jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
//     }
// });
// jQuery('#return-to-top').click(function() {      // When arrow is clicked
//     jQuery('body,html').animate({
//         scrollTop : 0                       // Scroll to top of body
//     }, 500);
// });
// back to top btn end



// top to back open
  // Add smooth scrolling to all links
  // jQuery(".top-to-back").on('click', function(event) {

  //   // Make sure this.hash has a value before overriding default behavior
  //   if (this.hash !== "") {
  //     // Prevent default anchor click behavior
  //     event.preventDefault();

  //     // Store hash
  //     var hash = this.hash;

  //     // Using jQuery's animate() method to add smooth page scroll
  //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //     jQuery('html, body').animate({
  //       scrollTop: $(hash).offset().top
  //     }, 800, function(){
   
  //       // Add hash (#) to URL when done scrolling (default click behavior)
  //       window.location.hash = hash;
  //     });
  //   } // End if
  // });
// top to back end



// custom file upload btn open
// jQuery(".customfile_inputin").on("change",function(){
// var file_name = jQuery('input[type=file]').val().split('\\').pop();
// jQuery(".customfile_label").text(file_name);
// });
// custom file upload btn end

// wordpress menu open
jQuery( "<span class='clickD'></span>" ).insertAfter(".navbar-nav > li.menu-item-has-children > a");
if(jQuery(window).width() < 1025)
{
    


 $('.navbar-nav li .clickD').click(function(e) {
    e.preventDefault();
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.removeClass('toggled');
        $this.next().hide();
    } else {
        $this.parent().parent().find('.sub-menu').removeClass('show');
        $this.parent().parent().find('.toggled').removeClass('toggled');
        $this.parent().parent().find('.sub-menu').hide();
        $this.next().toggleClass('show');
        $this.toggleClass('toggled');
        $this.next().show();
    }
});

 $('html').click(function(){
    $('.navbar-nav li .clickD').removeClass('toggled');
});
  $(document).click(function(){
     $('.navbar-nav li .clickD').removeClass('toggled');
});
  $('.navbar-nav').click(function(e){
  e.stopPropagation();
});
  }
// wordpress menu end

// $('.banner').slick({
//   infinite: true,
//   dots: true,
//   slidesToShow: 1,
//   slidesToScroll: 1
// });




