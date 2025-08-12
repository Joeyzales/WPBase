var paths = [
    "https://s3.us-west-1.amazonaws.com/weekendpictures.com/weekendpicture/obj/img/wp_img1.png",
    "https://s3.us-west-1.amazonaws.com/weekendpictures.com/weekendpicture/obj/img/wp_img2.png",
    "https://s3.us-west-1.amazonaws.com/weekendpictures.com/weekendpicture/obj/img/wp_img3.png",
    "https://s3.us-west-1.amazonaws.com/weekendpictures.com/weekendpicture/obj/img/wp_img4.png",
    "https://s3.us-west-1.amazonaws.com/weekendpictures.com/weekendpicture/obj/img/wp_img5.png"
];
window.onload = function() {
    var img = document.getElementById("wpimage");
    var i = 0;
    img.src = paths[i];
    var timer = setInterval(function(){
        if(i >= paths.length){
            clearInterval(timer);
            i = 0;
        }
        img.src = paths[i++];
    }, 50000);
};