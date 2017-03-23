$(document).ready(function () {
  console.log("index.js ran");

  $("#web, #interact, #fun").hide();


  $(".webBtn").click(function () {

    $("#interact, #fun").slideUp("slow");

    $("#web").slideToggle("slow");
  });
  
  $(".funBtn").click(function () {

    $("#web, #interact").slideUp("slow");

    $("#fun").slideToggle("slow");
  });
  
  $(".interactBtn").click(function () {

    $("#web, #fun").slideUp("slow");

    $("#interact").slideToggle("slow");
  });
});
