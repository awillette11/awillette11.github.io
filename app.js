$(document).ready(function(){
  
  
 //Technology Tab

$("#ux-tab").on("click",function() {
  $(".technology-content").hide();
  
  });
  
  $("#ux-tab").click(function(){
  $(".ux-technology-content").show();
  
  });
  
  $("#ux-tab").click(function(){
  $("#ux-tab").css("border-bottom", ".4rem solid #0a0d2c");
  });
  
  $("#ux-tab").click(function(){
  $("#defaultOpen").css("border", "none");
  });
  
  
  
  //UX Tab
  
  $("#defaultOpen").on("click",function() {
  $(".ux-technology-content").hide();
  
  });
  
  $("#defaultOpen").click(function(){
  $(".technology-content").show();
  
  });
  
  $("#defaultOpen").click(function(){
  $("#defaultOpen").css("border-bottom", ".4rem solid #0a0d2c");
  });
  
  $("#defaultOpen").click(function(){
  $("#ux-tab").css("border", "none");
  });
  







});