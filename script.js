
//Javascript code for the display of Cart-Modal on clicking the cart option in the header

let cartmodal = document.getElementById("cart-modal-container");
let cart = document.getElementById("cart-icon");
let JTGeats = document.getElementById("JTGeats");
let requestmodal = document.getElementById("request-modal-container");
cart.addEventListener("click", function () {
    cartmodal.style.display = "flex";
    requestmodal.style.display = "none";
    document.body.style.overflowY = "hidden";
})

//Cart-Modal disappears on clicking the Back to Menu button
let btn = document.getElementById("back-to-menu");
btn.addEventListener("click", function () {
    cartmodal.style.display = "none";
    document.body.style.overflowY = "auto";
})



//Javascript code for the display of Request-Dish-Modal on clicking the Request Dish button

let requestbtn = document.getElementById("request-btn");
requestbtn.addEventListener("click", function () {
    requestmodal.style.display = "flex";
    cartmodal.style.display = "none";
    JTGeats.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";
    window.scrollTo(0, 0);
})

//Request-Dish-Modal disappears on clicking the Cancel or Submit button

let cancel = document.getElementById("cancel");
cancel.addEventListener("click", function () {
    requestmodal.style.display = "none";
    document.body.style.overflowY = "auto";
})

let submit_request = document.getElementById("submit-request");
submit_request.addEventListener("click", function () {
    requestmodal.style.display = "none";
    document.body.style.overflowY = "auto";
})


//Javascript Code for playing/pausing the video when clicked on it or the play button

let foodvideo = document.getElementById("food-video");
let video = document.getElementById("play-video");
let playbtn = document.getElementById("play-btn");
let toggle = true;
foodvideo.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playbtn.style.display = "none";
    }
    else {
        video.pause();
        playbtn.style.display = "flex";
    }

})



//Javascript code for the image carousel
//Works both ways(left and right)
let counter=2;

function showcards(counter) {
    let left=counter==1?14:counter-1;
    let right = counter==14?1:counter+1;
    document.getElementById("c" + left).style.display = "flex";
    document.getElementById("c" + counter).style.display = "flex";
    document.getElementById("c" + right).style.display = "flex";
}

window.onload = showcards(counter);


let rightarrow = document.getElementById("rightarrow");
let leftarrow = document.getElementById("leftarrow");
rightarrow.addEventListener("click", () => {
    let left = counter==1?14:counter-1;
    document.getElementById("c" + left).style.display = "none";
    counter=counter==14?1:counter+1;
    showcards(counter);
    
})

leftarrow.addEventListener("click", () => {
    let right = counter==14?1:counter+1;
    document.getElementById("c" + right).style.display = "none";
    
    counter=counter==1?14:counter-1;
    showcards(counter);
    
})
