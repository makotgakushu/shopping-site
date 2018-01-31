$(document).ready(function(){
  $("#menu").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});

$(window).load(function(){
  $("#list-image img").click(function(){
    var img_src = $(this).attr("src");
    $("#display-image img").attr("src", img_src);
  });
});
