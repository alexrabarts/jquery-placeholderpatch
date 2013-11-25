/*
 * placeholder: a jQuery plugin
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

(function ($) {
  $.extend($.fn, {
    placeholder: function (options) {
      var defaults = {placeholderClass: 'placeholder'};
      var test = document.createElement('input');

      options = $.extend(defaults, options);

      $.support.placeholder = false;

      if('placeholder' in test) {
        $.support.placeholder = true;
        return function() {}
      } else {
        return this.each(function () {
          var input = $(this).addClass(options.placeholderClass);
          var form = input.parents('form:first');
          var placeholder = input.attr('placeholder');

          if (placeholder) {
            if (input.val() === '') {
              input.val(placeholder);
            }

            input.focus(function () {
              clearInput();
            }).blur(function () {
              unclearInput();
            });

            form.submit(function() {
              if (input.hasClass(options.placeholderClass)) {
                input.val('');
              }
            });

            input.blur();
          }

          function clearInput() {
            if (input.val() === placeholder) {
              input.val('');
            }

            input.removeClass(options.placeholderClass);
          }

          function unclearInput() {
            if (input.val() === '') {
              input.addClass(options.placeholderClass).val(placeholder);
            }
          }
        });
      }
    }
  });
})(jQuery);

jQuery(document).ready(function ($) {
  $('[placeholder]:not([type="password"])').placeholder();
});
