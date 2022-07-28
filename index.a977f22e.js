$(".scroll").click((function(t){var o=this.hash.slice(0);if(o&&(o[0],1)){t.preventDefault(),window.location.hash="";$(o).offset();$("html, body").animate({scrollTop:$(o).offset().top},500),history.pushState&&history.pushState({},null,window.location.pathname)}}));
//# sourceMappingURL=index.a977f22e.js.map
