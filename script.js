function openModal(videoSrc) {
  const modal = document.getElementById("modal");
  const video = document.getElementById("modalVideo");
  modal.style.display = "block";
  video.src = videoSrc;
}

document.getElementById("modal").onclick = function() {
  this.style.display = "none";
}
