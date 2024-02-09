var photos = [
  "./img/post_img_1.png",
  "./img/post_img_2.png",
  "./img/post_img_3.png",
];
var imgTag = document.getElementById("img");

var count = 0;

function prev() {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
} 

function next() {
  count++;
  if (count >= photos.length) {
    count = 0;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}

var go;
function autoplay() {
  go = setInterval(() => {
    next();
  }, 1000);
}

function stopAutoplay() {
    clearInterval(go);
}
