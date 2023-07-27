// http://stackoverflow.com/questions/4857896/jquery-callback-after-all-images-in-dom-are-loaded
$(window).load(function() { // this will fire after the entire page is loaded, including images

// http://www.beginnercode.com/2013/08/09/setting-equal-height-images-with-twitter-bootstrap-thumbnails/
     $('.thumbnail img').css({
        'height': $('.thumbnail img').height()
    });
});


$(document).ready(function() {
  $('#myTabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });


  $(".sd_goto_landing").click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_landing']" ).trigger( "click" );
  });

  // debugger;


// datasci
for (let ind = 1; ind <= 10; ind++) {
  $(".sd_goto_ds"+ind).click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_datasci']" ).trigger( "click" );
    $( "a[href='#tab"+ind+"']" ).trigger( "click" );
  });
}

// web
for (let ind = 1; ind <= 10; ind++) {
  $(".sd_goto_w"+ind).click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_web']" ).trigger( "click" );
    $( "a[href='#tab"+ind+"']" ).trigger( "click" );
  });
}

// science
for (let ind = 1; ind <= 10; ind++) {
  $(".sd_goto_s"+ind).click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_science']" ).trigger( "click" );
    $( "a[href='#tab"+ind+"']" ).trigger( "click" );
  });
}

});

