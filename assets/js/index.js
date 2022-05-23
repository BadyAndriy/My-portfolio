const todos = JSON.parse(localStorage.getItem("dark-mode"));

if (todos == '1') {
  $('body').toggleClass('dark-mode')
}
function white() {
  localStorage.removeItem("dark-mode", JSON.stringify(1));
  location.reload();
}
function dark() {
  localStorage.setItem("dark-mode", JSON.stringify(1));
  location.reload();
}
// =====================================================================================
$(document).ready(function(){
  $('.header__menu-burger').click(function(){
    $('.header').toggleClass('open')
    $('body').toggleClass('open')
  })
});
// =====================================================================================
$(document).ready(function(){
  $(".anchor-click").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
});
  