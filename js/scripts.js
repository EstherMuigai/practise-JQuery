  $(document).ready(function() {
    $('li#js').click (function (){
    $('ul#answer').prepend ('<li>JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm</li>');
    $('ul#answer').children('li').first().click(function() {
      $(this).remove();
    });
    });
    $('li#glob').click (function (){
      $('ul#answer').prepend ('<li>In computer programming, a global variable is a variable with global scope, meaning that it is visible (hence accessible) throughout the program, unless shadowed. The set of all global variables is known as the global environment or global state.</li>');
      $('ul#answer').remove('li');
      });
      });