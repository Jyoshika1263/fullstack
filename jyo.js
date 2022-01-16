let c = document.getElementById("my-canvas");
let ctx = c.getContext("2d");

    let img =  document.createElement("img");
    img.onload = () => {
        ctx.drawImage(img,0,0,500,500);
    };
img.src ="/images/idle/1.png";