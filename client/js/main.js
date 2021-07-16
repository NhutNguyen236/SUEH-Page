AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
            dots: false,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});


	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('#appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('#appointment_time').timepicker();

})(jQuery);

//============================== START Cẩm nang section ====================//
$('.testi2').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      1170: {
        items: 1
      }
    }
});
  
$(function() {
    // 1) ASSIGN EACH 'DOT' A NUMBER
    dotcount = 1;
    $('.testi2 .owl-dot').each(function() {
        $(this).addClass('dotnumber' + dotcount);
        $(this).attr('data-info', dotcount);
        dotcount = dotcount + 1;
    });
    // 2) ASSIGN EACH 'SLIDE' A NUMBER
    slidecount = 1;
    $('.testi2 .owl-item').not('.cloned').each(function() {
        $(this).addClass('slidenumber' + slidecount);
        slidecount = slidecount + 1;
    });
    $('.testi2 .owl-dot').each(function() {
        grab = jQuery(this).data('info');
        slidegrab = $('.slidenumber' + grab + ' img').attr('src');
        $(this).css("background-image", "url(" + slidegrab + ")");
    });
    // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
    // TO MAKE IT ALL NEAT 

});

// Modal popup for 6 nguyên tắc văn hóa
$(function () {

    $('#six-rules').on('click', function () {
        openSixRules();
    });
  
});

$(function () {

    $('#seven-rules').on('click', function () {
        openSevenRules();
    });
  
});

var inceptionLevel = 1;
var offsetLevel = 0;

function openSixRules() {
    if (offsetLevel > 5) {
        offsetLevel = 0;
    }

    new jBox('Modal', {
        width: 800,
        addClass: 'inception-modal',
        overlayClass: 'inception-overlay',
        zIndex: 'auto',
        draggable: 'title',
        closeOnClick: false,
        closeButton: 'title',
        title: '<h3><strong>Nội dung 6 nguyên tắc văn hóa</strong></h3>',
        offset: {
        x: offsetLevel * 15,
        y: offsetLevel * 15
        },
        content: (
        '<p>Để gắn kết toàn bộ các nhân sự trong tổ chức, SUEH đã xây dựng và phát triển cẩm nang hoạt động SUEH có sự tham khảo từ văn hóa Vinamilk, nêu ra 6 nguyên tắc bắt buộc tổ chức phải đi theo</p>' +
        `
        <ul style="clear:left;">
            <li><strong>Trách nhiệm</strong>: Khi được giao nhiệm vụ phải hoàn thành một cách đầy đủ, đúng hạn, và phải chịu trách nhiệm về những việc mình làm</li>
            <li><strong>Hướng kết quả</strong>: Đó là đích đến để bắt đầu thực hiện mọi hành động</li>
            <li><strong>Sáng tạo và chủ động</strong>: Đề cao cái mới, tìm kiếm nhiều giải pháp.</li>
            <li><strong>Hợp tác</strong>: Chắc chắn sẽ đạt được kết quả tốt khi sử dụng nhiều hơn một bộ não</li>
            <li><strong>Chính trực</strong>: Trung thực, thật thà</li>
            <li><strong>Xuất sắc</strong>: Có kỹ năng tốt, và luôn cải thiện năng lực</li>
        </ul>
        ` 
        +
        '<p><button class="inception-modal-button btn btn-primary" data-inception-tooltip="Nhấn để xen 7 hành vi lãnh đạo">Xem 7 hành vi lãnh đạo</button></p>'
        ),
        
        onCreated: function () {
        // Add tooltip
        this.tooltip = new jBox('Tooltip', {
            theme: 'TooltipBorder',
            attach: '[data-inception-tooltip]',
            getContent: 'data-inception-tooltip',
            zIndex: 'auto',
            delayOpen: 600
        });

        // Add button event
        this.content.find('.inception-modal-button').on('click', function () {
            openSevenRules();
        });
        },
        // Remove modal from DOM when it's closed
        onCloseComplete: function () {
        this.destroy();
        this.tooltip && this.tooltip.destroy();
        }
    }).open();

    offsetLevel++;
}

function openSevenRules() {
    if (offsetLevel > 5) {
        offsetLevel = 0;
    }

    new jBox('Modal', {
        width: 800,
        addClass: 'inception-modal',
        overlayClass: 'inception-overlay',
        zIndex: 'auto',
        draggable: 'title',
        closeOnClick: true,
        closeButton: 'title',
        title: '<h3><strong>Nội dung 7 hành vi lãnh đạo</strong></h3>',
        offset: {
        x: offsetLevel * 15,
        y: offsetLevel * 15
        },
        content: (
        '<p>Để tổ chức phát triển mạnh mẽ và có chỗ đứng, tất cả ban lãnh đạo và thành viên tổ chức đều nắm vững 4 hành vi lãnh đạo như sau:</p>' +
        `
        <ul>
            <li>Cấp lãnh đạo cần quan tâm, động viên thành viên, quan sát năng lực và có kế hoạch đào tạo cho toàn bộ thành viên</li>
            <li>Tạo điều kiện môi trường làm việc tốt và kết nối tất cả thành viên lại với nhau.</li>
            <li>Cần biết đưa ra các ý tưởng, kích thích sức sáng tạo của thành viên</li>
            <li>Là người cầm lái, là huynh trưởng nhưng cũng là người phục vụ.</li>
        </ul>
        <p>Tuy nhiên, ai cũng có thể biểu lộ khả năng lãnh đạo, chính vì thế</p>
        <ul>
            <li>Mọi người cần có thái độ của nhà lãnh đạo-bất kể vai trò của mình là gì</li>
            <li>Cần nhận lãnh trách nhiệm về mình để đạt kết quả cao nhất</li>
            <li>Làm việc cần có kế hoạch, báo cáo</li>
            <li>Mọi người cần tích cực và khơi nguồn cảm hứng</li>
            <li>Cần biết nỗ lực hơn một chút nữa khi làm việc, xem sự thay đổi là cơ hội khiến sự việc tốt đẹp hơn</li>
        </ul>
        ` 
        +
        '<p><button class="inception-modal-button btn btn-primary" data-inception-tooltip="Nhấn để xem 6 nguyên tắc văn hóa">Xem 6 nguyên tắc văn hóa</button></p>'
        ),
        
        onCreated: function () {
        // Add tooltip
        this.tooltip = new jBox('Tooltip', {
            theme: 'TooltipBorder',
            attach: '[data-inception-tooltip]',
            getContent: 'data-inception-tooltip',
            zIndex: 'auto',
            delayOpen: 600
        });

        // Add button event
        this.content.find('.inception-modal-button').on('click', function () {
            openSixRules();
        });
        },
        // Remove modal from DOM when it's closed
        onCloseComplete: function () {
        this.destroy();
        this.tooltip && this.tooltip.destroy();
        }
    }).open();

    offsetLevel++;
}
  
//============================== END Cẩm nang section =================================================//

//============================== START Dự án slider =======================//
$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:10,
    nav:false,
    items:1,
    lazyLoad: true,
    nav:true,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 250
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 190
        }
    }
})

// Create image box for dự án section
new jBox('Image', {
});

//============================== END Dự án slider =======================//