
// Part 1: make form elements hidden
document.getElementById("form").hidden= true;

// Part 2: function that loops through 5 main images

function getImages() {
    const imgName = 'images/pic';
    let thumbBar = document.getElementById("thumb-bar");


    for (let i =1; i < 6; i++) {
        let img = document.createElement("img");
        img.src = `images/pic${i}.jpg`;
        thumbBar.appendChild(img);
    }
}
getImages();

// part 3: function to make form elements visible, and update img

function getMainImage(event) {
    // show form
    document.getElementById("form").hidden=false;

    // set main image to come from source of mouse hover target
    document.querySelector(".displayed-img").src = event.target.src;
}
document.getElementById("thumb-bar").addEventListener("mousemove", getMainImage);

// part 4:
function submitClicked(event) {
    // get input elements text
    let a = document.querySelector("input");

    // get main image current displaying
    let mainImg = document.querySelector(".displayed-img");

    // reason I check for 50 is because all src lengths are 50 if unblurred, 51 if blurred.
    // this means blur on a blurred img does nothing. This is to prevent errors
    if (a.value === "blur" && mainImg.src.length ===50) {

        // split it to insert B
        let src = document.querySelector(".displayed-img").src.split(".");
        // blur img
        mainImg.src = src[0] + "B." + src[1];
    }

    else {
        alert("Not a valid command or image is already blurred!");
    }
    // clear text field
    a.value = "";
}

document.getElementById("submit").addEventListener("click", submitClicked);
