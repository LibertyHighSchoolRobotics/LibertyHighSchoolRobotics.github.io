var NUM_IMAGES = 7;
var ALPHA_LOW = 0.4, ALPHA_HIGH = 1.0;
$(document).ready(function(){
  var table = $("#link-table");
  for(var i=0;i<NUM_IMAGES;){
    var start=i;
    var row = $("<tr></tr>");
    for(;(i-start)<10 && i<NUM_IMAGES;i++){
      var img = $("<img src='img" + i + ".jpg'/>");
      img.click(function(){
        $("#link-table img").not(this).fadeTo("slow", ALPHA_LOW);
        $(this).fadeTo("slow", ALPHA_HIGH);
      });
      var cell = $("<td></td>");
      cell.append(img);
      row.append(cell);
    }
    table.append(row);
  }
  $("#main").attr("src", "img0.jpg");
  $("#link-table img").fadeTo(0, ALPHA_LOW);
});
