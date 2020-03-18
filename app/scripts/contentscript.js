window.onload = function(e){
  setTimeout(stopAllvideo, 0);
}
document.onreadystatechange = function(e) {
  console.log(document.readyState, e);
  if (document.readyState === "complete") {
    setTimeout(stopAllvideo, 500);
    setTimeout(stopAllvideo, 1500);
  }
};

function stopAllvideo() {
  let videoList = document.getElementsByTagName("video");

  for (let i = 0; i < videoList.length; i++) {
    let element = videoList[i];
    console.log(element, element.autoplay, element.muted);

    element.addEventListener(
      "play",
      e => {
        element.pause();
      },
      { once: true }
    );
    element.pause();
  }
}
