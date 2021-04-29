//--------------------Album--------------------
let posters = [];
posters.push("moviePoster/hitmans-wifes-bodyguard.jpg");
posters.push("moviePoster/in-the-earth.jpg");
posters.push("moviePoster/luca.jpg");
posters.push("moviePoster/minari.jpg");
posters.push("moviePoster/nobody.jpg");
posters.push("moviePoster/Oxygen.jpg");
posters.push("moviePoster/spacejam-2.jpg");
posters.push("moviePoster/tenet.jpg");
posters.push("moviePoster/The_War_With_Grandpa.jpg");
posters.push("moviePoster/Zack-Snyder-Justice-League.jpg");
let index = 1;
function changeImage() {
    let img = document.getElementById("image");
    index = index % posters.length;
    img.src = posters[index++];
}

let loop = setInterval("changeImage()",1200);
function StopAblum() {
    clearInterval(loop);
}
//--------------------Album end--------------------
//--------------------content page--------------------
let index2 = 0;
let content_page;//background
let close_btn;
let contentPage_image;//sub window poster

window.onload = function(){
    content_page = document.getElementById("contentPage");
    close_btn = document.getElementById("close");

    contentPage_image = document.getElementById("contentPage_image");
}

function open_contentPage(index3){
    content_page.style.display = "block";
    //StopAblum();

    //change content page poster here
    contentPage_image.src = posters[index3];
}
function close_contentPage(){
    content_page.style.display = "none";
    loop = setInterval("changeImage()",1000);;
}

window.onclick = function(event){
    if(event.target == content_page){
        close_contentPage();
    }
}


//

//--------------------content page end--------------------
