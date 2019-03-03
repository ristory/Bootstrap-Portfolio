$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
 $(".loader").style.display = "none";
 $(".loader").style.display = "block";
   });
   
   
   $(window).on('load', function () {
document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
});