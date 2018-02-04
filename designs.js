

function makeGrid() {
          var width=$("#width").val();
          var height=$("#height").val();
      
        for(let i=0;i<height;i++){
           $(".grid").prepend("<tr></tr>");
               for(let j=0;j<width;j++){
          $(".grid").prepend("<td></td>");
            }
        }
}

$("#submit").click(function(){
makeGrid();
  event.preventDefault();
});
$('table').on('click', 'td', function () {
     var color=$("#color").val();
     $(this).css('background-color',color);
 });
 
/*$('td').click(function(){
    var color=$("#color").val();
        $(this).css('background-color',color);
      });*/
/*$(".cells").click(function (){
    var paint = color.val(); 
    $(this).css(paint);
});*/
/*$(".grid").on("click","td",function(){
var color=$("#color").val();
$(this).css("background-color",color);
  });*/