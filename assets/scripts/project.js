(function($) {
//   $(function() {
//     function sticky() {
// 		var w = $(window).width();
// 		var $aside = $('.project aside');

// 		// Always detach before reattaching (prevents double-binding)
// 		$aside.trigger('sticky_kit:detach');

// 		if (w >= 750) {
// 			// Wait for all images & videos to load before sticking
// 			var $media = $aside.find('img, video');
// 			var allLoaded = 0;
// 			var attachSticky = function() {
// 			$aside.stick_in_parent({
// 				parent: '.project .container',
// 				offset_top: $('.header').outerHeight(),
// 				bottoming: true
// 			});
// 			};

// 			if ($media.length) {
// 			$media.each(function() {
// 				if (this.complete) {
// 				allLoaded++;
// 				} else {
// 				$(this).one('load loadeddata', function() {
// 					allLoaded++;
// 					if (allLoaded === $media.length) attachSticky();
// 				});
// 				}
// 			});
// 			if (allLoaded === $media.length) attachSticky();
// 			} else {
// 			attachSticky();
// 			}
// 		}
// 	}

//     $(window).on('load resize', sticky);
//   });

  var sr = ScrollReveal({
    origin   : "bottom",
    distance : "64px",
    duration : 900,
    delay    : 0,
    scale    : 1
  });

  sr.reveal('.project li');
})(jQuery);
