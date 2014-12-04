$.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
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

  var moveCursor = function(){
    $cursor.css({
      left: $field.textWidth()
    });
  };

  var start = function(){
    $cursor.show();
    blinkInterval = setInterval(blink, 500);
  };

  var stop = function(){
    clearInterval(blinkInterval);
    $cursor.hide();
  };

  // Set events
  $field.on("input", moveCursor);

  $field.on("blur", function(){
    stop();
  });

  $field.on("focus", function(){
    start();
  });

  return $field;
};