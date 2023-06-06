$(".intro h1").click(function () {
  $(this).next().width(800);
  $(this).next().height(800);
});

$(".intro img").click(function () {
  var currentWidth = $(this).width();
  var currentHeight = $(this).height();

  var scaleFactor = 0.8;

  var newWidth = currentWidth * scaleFactor;
  var newHeight = currentHeight * scaleFactor;

  $(this).width(newWidth);
  $(this).height(newHeight);
});

$(".profile").click(function () {
  alert("클릭을 하셧군요.");
});
