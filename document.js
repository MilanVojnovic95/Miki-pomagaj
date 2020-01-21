


/*--- Skill bar jQuery--- */

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
  //Project hover animation 
  $('#portfolio .thumbnail').hover(function(){
    $(this).children(".cust-caption").slideDown();
  },
  function(){
    $(this).children(".cust-caption").fadeOut();
  });
});
  
 //Skills' animation
$(window).scroll(function(){
  jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},6000);
		});
});


/*--- ABOUT -------*/

let leftBox = document.getElementById('leftBox');
let rightBox = document.getElementById('rightBox');
let lastScrollTop = 0;

document.addEventListener('scroll', function( event ) {
	var st = window.pageYOffset || document.documentElement.scrollTop;
	let leftBoxTop = parseInt(leftBox.style.top);
	let rightBoxBottom = parseInt(rightBox.style.bottom);

	if (st > lastScrollTop){
		leftBoxTop += 5;
		rightBoxBottom += 5;
	} else {
	   leftBoxTop -= 5;
	   rightBoxBottom -= 5;
	}
	lastScrollTop = st <= 9 ? 9 : st ;

	leftBox.style.top = leftBoxTop + "px";
	rightBox.style.bottom = rightBoxBottom + "px";
} );


/*------Button Dropdown--------*/
        