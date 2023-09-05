$(document).ready(function(){
  
   $('#memeSunglasses').click(function(){
     console.log("position:, ", $("#memeSunglasses").position())
   });  
  
  $("#memeSunglasses").draggable({ stop: function(){
      if($("#memeSunglasses").position().left > 380 && $("#memeSunglasses").position().left < 450  && $("#memeSunglasses").position().top > 95 && $("#memeSunglasses").position().top < 125){
      $("#wowText").text("WOW! The Doge™ is looking pretty cool!");
    }
  }
   });
});