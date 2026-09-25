
//  inserting and deleting  Ex35
function changeImage() {

    alert("Ku soo dhawoow! Fadlan geli xogta sawirka.");
    let imageURL = prompt("Geli Image URL:");
    let borderColor = prompt("Geli Border Color:");
    let width = prompt("Geli Width (px):");
    let height = prompt("Geli Height (px):");
    let borderRadius = prompt("Geli Border Radius (px):");

    let image = document.getElementById("myImage");

    image.src = imageURL;
    image.style.width = width + "px";
    image.style.height = height + "px";
    image.style.border = "5px solid " + borderColor;
    image.style.borderRadius = borderRadius + "px";
}

changeImage();