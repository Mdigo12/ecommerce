

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

    //   var cartCount = 1;
    //   var newCartCount;
    //   var result;
    //   function sum(){
    //   newCartCount+=cartCount;
    //   return newCartCount;
    //   result = newCartCount.toString();
    // }
    //   $("#item_number").append(result);
     });
  //   $( "#item_list").click(function() {
  //   $( "#item_number" ).append($( "<li>" ));
  //   var n = $( "li" ).length;
  //   $( "span" ).text(n);
  // })
  // // Trigger the click to start
  // .trigger( "click" );
  
});
var n =
$("#item_list11")
    

  
});