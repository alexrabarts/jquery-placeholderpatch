# DEPRECATION WARNING

Please note, this plugin has not been under active development since the HTML5
<code>placeholder</code> attribute was introduced.  If you wish to support this
attribute in older browsers, the following snippet of code will achieve that
for you:

https://gist.github.com/379601

Alternatively, there are several other jQuery plugins available that add
support for the <code>placeholder</code> attribute.

# clearingInput: a jQuery plugin

clearingInput is a simple jQuery plugin that provides example/label text
inside text inputs that automatically clears when the input is focused.
Common uses are for a hint/example, or as a label when space is limited.

## Usage

The value is taken from the input's label by default.  The label is
positioned off-screen to remain accessible:

<pre>
  &lt;label for="myInput">The label text&lt;/label&gt;
  &lt;input id="myInput" type="text" /&gt;

  $('#myInput').clearingInput(); // Input value will be 'The label text'
</pre>

If there is no label associated with the input (or if the label wraps the
input) then the value of the input is used as the text:

<pre>
  &lt;label&gt;
    My input
    &lt;input id="myInput" type="text" value="The input text" /&gt;
  &lt;/label&gt;

  $('#myInput').clearingInput(); // Input value will be 'The input text'
</pre>

If there is a label but you want to explicitly set the input text:

<pre>
  &lt;label for="myInput"&gt;The label text&lt;/label&gt;
  &lt;input id="myInput" type="text" value="The input text" /&gt;

  $('#myInput').clearingInput({text: 'Custom text'}); // Value will be 'Custom text'
  // or
  var myInput = $('#myInput');
  myInput.clearingInput({text: myInput.val()})' // Value will be 'The input text'
</pre>

Note that a limitation of using the input's own value for the text is that the
value may be overwritten with the last submitted value if the user uses the
back button.  For this reason, using the input's own value is discouraged.

You can optionally clear the input on hover:

<pre>
  $('#myInput').clearingInput({clearOnHover: true});
</pre>

You probably want to add a style to your CSS for the blurred state:

<pre>
  input.blur { color: #CCC; }
</pre>

Customise the class applied to the input when blurred:

<pre>
  $('#myInput').clearingInput({blurClass: 'customBlurClass'});
</pre>

# Licensing

Licensed under the MIT:
http://www.opensource.org/licenses/mit-license.php

Copyright (c) 2011 Stateless Systems (http://statelesssystems.com)
