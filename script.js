
//Javascript code for the display of Cart-Modal on clicking the cart option in the header

let cartmodal = document.getElementById("cart-modal");
let cart = document.getElementById("cart-icon");
let JTGeats = document.getElementById("JTGeats");
cart.addEventListener("click", function () {
    cartmodal.style.display = "flex";
    JTGeats.style.overflow = "hidden";
})

//Cart-Modal disappears on clicking the Back to Menu button
let btn = document.getElementById("back-to-menu");
btn.addEventListener("click", function () {
    cartmodal.style.display = "none";
})



//Javascript code for the display of Request-Dish-Modal on clicking the Request Dish button


let requestmodal = document.getElementById("request-modal");
let requestbtn = document.getElementById("request-btn");
requestbtn.addEventListener("click", function () {
    requestmodal.style.display = "flex";
    JTGeats.style.overflow = "hidden";
    window.scrollTo(0, 0);
})

//Request-Dish-Modal disappears on clicking the Cancel or Submit button

let cancel = document.getElementById("cancel");
cancel.addEventListener("click", function () {
    requestmodal.style.display = "none";
})

let submit_request = document.getElementById("submit-request");
submit_request.addEventListener("click", function () {
    requestmodal.style.display = "none";
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



let left = 1;
let right = 3;

function showcards(left,right) {
    for (i = left; i <= right; i++) {
        document.getElementById("c" + i).style.display = "flex";
    }
}

window.onload = showcards(left,right);


let rightarrow = document.getElementById("rightarrow");
let leftarrow = document.getElementById("leftarrow");
rightarrow.addEventListener("click", () => {
    
    document.getElementById("c" + left).style.display = "none";
    console.log(document.getElementById("c" + left));
    if(right==14)
    {
        right=1;
        left++;
    }
    else if(left==14)
    {
        left==1;
        right++;
    }
    else{
        left++;
        right++;
    }
    showcards(left,right);
    
})

leftarrow.addEventListener("click", () => {
    
    document.getElementById("c" + right).style.display = "none";
    console.log(document.getElementById("c" + left));
    if(left==1)
    {
        left=14;
        right--;
    }
    else if(right==1)
    {
        right==14;
        left--;
    }
    else{
        left--;
        right--;
    }
    showcards(left,right);
    
})