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

  // debugger;





  $(".sd_goto_tp_s1").click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_p']" ).trigger( "click" );
    $( "a[href='#tab1']" ).trigger( "click" );
  });

  $(".sd_goto_tp_s2").click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_p']" ).trigger( "click" );
    $( "a[href='#tab2']" ).trigger( "click" );
  });

  $(".sd_goto_tp_s3").click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_p']" ).trigger( "click" );
    $( "a[href='#tab3']" ).trigger( "click" );
  });

  $(".sd_goto_tp_s4").click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_p']" ).trigger( "click" );
    $( "a[href='#tab4']" ).trigger( "click" );
  });

  $(".sd_goto_tp_s5").click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_p']" ).trigger( "click" );
    $( "a[href='#tab5']" ).trigger( "click" );
  });

  // $(".sd_goto_tp_s5").click(function (e) {
  //   e.preventDefault();
  //   $( "a[href='#tab_p']" ).trigger( "click" );
  //   $( "a[href='#tab5']" ).trigger( "click" );
  // });


  $(".sd_goto_tps_s1").click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_ps']" ).trigger( "click" );
    $( "a[href='#ps_tab1']" ).trigger( "click" );
  });

  $(".sd_goto_tps_s2").click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_ps']" ).trigger( "click" );
    $( "a[href='#ps_tab2']" ).trigger( "click" );
  });

  $(".sd_goto_tps_s3").click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_ps']" ).trigger( "click" );
    $( "a[href='#ps_tab3']" ).trigger( "click" );
  });

  $(".sd_goto_tps_s4").click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_ps']" ).trigger( "click" );
    $( "a[href='#ps_tab4']" ).trigger( "click" );
  });

  $(".sd_goto_tps_s5").click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_ps']" ).trigger( "click" );
    $( "a[href='#ps_tab5']" ).trigger( "click" );
  });




  $(".sd_goto_home").click(function (e) {
    e.preventDefault();
    $( "a[href='#tab_am']" ).trigger( "click" );
  });

});

