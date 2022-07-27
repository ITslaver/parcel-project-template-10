var time=2;cc=1,$(window).scroll((function(){$("#counter").each((function(){$(this).offset().top<$(window).scrollTop()+350&&cc<2&&$("div").each((function(){var t=1,c=$(this).data("num"),n=1e3*time/c,i=$(this),o=setInterval((function(){t<=c?i.html(t):(cc+=2,clearInterval(o)),t++}),n)}))}))}));
//# sourceMappingURL=index.abff9dcf.js.map
