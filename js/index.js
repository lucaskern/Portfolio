$(document).ready(function(){
  console.log("index.js ran");
  
  $("#web").hide();
  
    $(".webBtn").click(function(){
        //$("#web").show();
        $("#web").slideDown("slow");
    });
});