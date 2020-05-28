

var pictureHeight = $(".picture").height();
console.log("the picture's height in px: " + pictureHeight);

function buttonPositioningTop() {
  if ($(window).width() < 768) {
  $(".grouped-btn").css("top", pictureHeight - 16);
  };
};

// $(window).resize(buttonPositioningTop);
buttonPositioningTop();
