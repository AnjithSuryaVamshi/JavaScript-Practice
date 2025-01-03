
function random(){
    return Math.round(Math.random()*5)+1
}

var img1  = "dice"+random()+".png"
var src1 = "images/"+img1;
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",src1)


var img2  = "dice"+random()+".png"
var src2 = "images/"+img2;
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src",src2)
if()
