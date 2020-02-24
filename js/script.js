

   $(document).ready(function(){
  $(".view_cart").click(function(){
    $(".cart").show();
  });
  $(".search-icon").click(function(){
    $(".search-bar").toggle();
  });
  $(".btn_add_cart").click(function(){
    var newImage = $('<img src ="images/watch4.jpeg" alt="image" width="50px" height = "50px">');
    $("#cart_image").prepend(newImage);
    
    $("#name").prepend("Ksh.1500");
    $("#name").before("Wrist Watch");
    $("#delete").show();
    alert("One Item Added to Cart");
    $("#delete").click(function(){
      $(".list").remove();
      $("#delete").hide();
    });
    

});
  
});