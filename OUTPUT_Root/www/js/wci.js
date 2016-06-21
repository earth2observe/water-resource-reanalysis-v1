function goToByScroll(id) {
   // Remove "link" from the ID
   id = id.replace("link", "");
   // Scroll
   $('html,body').animate({
         scrollTop: $("#" + id).offset().top - 150
      },
      'slow');
}

$("ul.navbar-nav > li > a[href='#']").click(function(e) {
   e.preventDefault();
   goToByScroll($(this).attr("id"));
});

$(".top-link").click(function(e) {
   e.preventDefault();
   goToByScroll('banner');
});

$(document).ready(function() {
   $(".fancy").fancybox({
      maxWidth : 800,
      maxHeight   : 600,
      fitToView   : false,
      width    : '70%',
      height      : '70%',
      autoSize : false,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none',
      padding  : 30
   });
});