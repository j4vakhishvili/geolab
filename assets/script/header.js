window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
        document.getElementById("header").style.paddingTop = "0";
        document.getElementById("header").style.height = "60px";
    } else {
        document.getElementById("header").style.paddingTop = "20px";
        document.getElementById("header").style.height = "80px";
    }
  }