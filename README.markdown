# placeholderPatch: a jQuery plugin

placeholderPatch is a simple jQuery polyfill that provides support for the HTML5
placeholder attribute in older browsers.

## Usage

The plugin is activated simply by including the file in the page.  If you need
to explicitly call the function on an element then you can do so:

<pre>
  $('#myInput').placeholder();
</pre>

You probably want to add a style to your placeholders:

<pre>
  input.placeholder { color: #CCC; }
</pre>

Customise the placeholder class applied to the input:

<pre>
  $('#myInput').placeholder({placeholderClass: 'customPleaceholderClass'});
</pre>

## TODO

* Keep label until text is entered in input
* Support password inputs

# Licensing

Licensed under the MIT:
http://www.opensource.org/licenses/mit-license.php

Copyright (c) 2013 Alex Rabarts
