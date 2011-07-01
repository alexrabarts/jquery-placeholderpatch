/*
 * clearingInput: a jQuery plugin
 *
 * clearingInput is a simple jQuery plugin that provides example/label text
 * inside text inputs that automatically clears when the input is focused.
 * Common uses are for a hint/example, or as a label when space is limited.
 *
 * For usage and examples, visit:
 * http://github.com/alexrabarts/jquery-clearinginput
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2011 Stateless Systems (http://statelesssystems.com)
 *
 * @author   Alex Rabarts (alexrabarts -at- gmail -dawt- com)
 * @requires jQuery v1.2 or later
 * @version  0.2
 */

(function ($) {
  $.extend($.fn, {
    clearingInput: function (options) {
      var defaults = {blurClass: 'blur', clearOnHover: false};

      options = $.extend(defaults, options);

      return this.each(function () {
        var input   = $(this).addClass(options.blurClass);
        var form    = input.parents('form:first');
        var focused = false;
        var label, text;

        text = options.text || textFromLabel() || input.val();

        if (text) {
          input.val(text);

          input.focus(function () {
            focused = true;
            clearInput();
          }).blur(function () {
            unclearInput();
            focused = false;
          });

          if (options.clearOnHover) {
            input.mouseenter(clearInput).mouseleave(function () {
              if (!focused) { unclearInput(); }
            });
          }

          form.submit(function() {
            if (input.hasClass(options.blurClass)) {
              input.val('');
            }
          });

          input.blur();
        }

        function textFromLabel() {
          label = form.find('label[for=' + input.attr('id') + ']');
          // Position label off screen and use it for the input text
          return label ? label.css({position: 'absolute', left: '-9999px'}).text() : '';
        }

        function clearInput() {
          if (input.val() === text) {
            input.val('');
          }

          input.removeClass(options.blurClass);
        }

        function unclearInput() {
          if (input.val() === '') {
            input.addClass(options.blurClass).val(text);
          }
        }
      });
    }
  });
})(jQuery);
