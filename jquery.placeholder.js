/*
 * placeholder: a jQuery plugin
 *
 * placeholder is a simple jQuery plugin that provides support for the
 * HTML5 placeholder attribute in older browsers.
 *
 * For usage and examples, visit:
 * http://github.com/alexrabarts/jquery-placeholder
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2011 Alex Rabarts
 *
 * @author   Alex Rabarts (alexrabarts -at- gmail -dawt- com)
 * @requires jQuery v1.2 or later
 * @version  0.1
 */

(function ($) {
  $.extend($.fn, {
    placeholder: function (options) {
      var defaults = {placeholderClass: 'placeholder'};

      options = $.extend(defaults, options);

      return this.each(function () {
        var input = $(this).addClass(options.placeholderClass);
        var form  = input.parents('form:first');
        var text  = input.val() || input.attr('placeholder');

        if (text) {
          input.val(text);

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
          if (input.val() === text) {
            input.val('');
          }

          input.removeClass(options.placeholderClass);
        }

        function unclearInput() {
          if (input.val() === '') {
            input.addClass(options.placeholderClass).val(text);
          }
        }
      });
    }
  });
})(jQuery);

jQuery(document).ready(function ($) {
  $('[placeholder]').placeholder();
});