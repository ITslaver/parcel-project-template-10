$('.scroll').click(function(e){
  var anch = this.hash.slice(0);
  if(!anch || !anch[0] === "#") return;
  e.preventDefault();
  window.location.hash = '';
  var offset = $(anch).offset();
  $("html, body").animate({scrollTop:$(anch).offset().top},500);
  if(history.pushState) { history.pushState({}, null, window.location.pathname); }
});