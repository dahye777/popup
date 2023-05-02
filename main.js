$("#notice>ul>li").on("click", function () {
  $(".popup").css("display", "block");

  var txt = $(this).children("a").text();
  $("popup>h1").text(txt);
});

// $('#close').on('click',function(){})
$("#close").click(function () {
  $(".popup").css("display", "none");
});
