$.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span style="display:inline;">').appendTo(document.body);
    var htmlText = text || this.val() || this.text();
    htmlText = $.fn.textWidth.fakeEl.text(htmlText).html(); //encode to Html
    htmlText = htmlText.replace(/\s/g, "&nbsp;"); //replace trailing and leading spaces
    $.fn.textWidth.fakeEl.html(htmlText).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
};

$.fn.cursorblinker = function(){
  var blinkInterval;
  var $field = $(this);
  var fieldHeight = $field.height();
  var cursorWidth = fieldHeight / 2;

  var $cursor = $("<div>")
                  .css({
                    height: fieldHeight,
                    width: cursorWidth,
                    "background-color": "#fff",
                    'margin-top': -fieldHeight,
                    position: 'relative',
                    display: "none"
                  });

  $cursor.insertAfter($field);

  var blink = function(){
    $cursor.toggle();
  };

  var textChanged = function(){
    start();

    $cursor.css({
      left: $field.textWidth()
    });
  };

  var start = function(){
    clearInterval(blinkInterval);
    $cursor.show();
    blinkInterval = setInterval(blink, 500);
  };

  var stop = function(){
    clearInterval(blinkInterval);
    $cursor.hide();
  };

  // Set events
  $field.on("input", textChanged);

  $field.on("blur", function(){
    stop();
  });

  $field.on("focus", function(){
    start();
  });

  return $field;
};