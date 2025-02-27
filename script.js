const images = ["https://media.istockphoto.com/id/1394440950/photo/natural-view-cosmos-filed-and-sunset-on-garden-background.jpg?s=612x612&w=0&k=20&c=eBnRobwsk2w_9MqM6bnXukIia5j-ayuMS0PeB6GHN0E=", "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt134818d279038650/6668df6434f6fb5cd48aac34/beautiful-flowers-rose.jpeg?q=70&width=3840&auto=webp", "https://plus.unsplash.com/premium_photo-1676070096487-32dd955e09e0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyZnVsJTIwZmxvd2VyfGVufDB8fDB8fHww"];
let currentIndex = 0;

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

function changeImage(index) {
    currentIndex = index;
    updateImage();
}

function updateImage() {
    document.getElementById("gallery-image").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("gallery-image").src = images[currentIndex];
        document.getElementById("gallery-image").style.opacity = 1;
    }, 200);
}
