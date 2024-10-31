(function ($) {
    'use strict';
  
  
    /* animation
    ------------------------------*/
  
    // scroll effects
    $.fn.acs = function (options) {
  
      var elements = this;
      var defaults = {
        screenPos: 0.9,
        className: 'is-animated'
      };
      var setting = $.extend(defaults, options);
  
  
      $(window).on('load scroll', function () {
        add_class_in_scrolling();
      });
  
      function add_class_in_scrolling() {
        var winScroll = $(window).scrollTop();
        var winHeight = $(window).height();
        var scrollPos = winScroll + (winHeight * setting.screenPos);
  
        if (elements.offset().top < scrollPos) {
          elements.addClass(setting.className);
        }
      }
    }
  
    $('.anm, [class*="anm-"], .anm-list > *').each(function () {
      $(this).acs();
    });
  
  
    // list animation delay
    $.fn.anmDelay = function (options) {
      var elements = this;
      var defaults = {
        delay: 0.2,
        property: 'animation-delay'
      };
      var setting = $.extend(defaults, options);
  
      var index = elements.index();
      var time = index * setting.delay;
      elements.css(setting.property, time + 's');
    }
  
    $('.anm-list > *').each(function () {
      $(this).anmDelay();
    });
  
  
  })(jQuery);