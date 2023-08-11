 
let currentImageIndex = 0;
const images = ["banner.png", "banner1.png", "banner2.png", "banner3.png", "banner4.png", "banner5.png", "banner6.png", "banner7.png", "banner8.png","banner9.png", "banner10.png", "banner11.png", "banner12.png"];

function changeBannerImage() {
  const bannerImage = document.getElementById("banner");
  bannerImage.src = "images/"+images[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Set the interval to change the banner every 3 seconds (3000 milliseconds)
setInterval(changeBannerImage, 3000);
 
