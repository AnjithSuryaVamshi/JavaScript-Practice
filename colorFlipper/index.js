const body = document.getElementsByTagName("body")[0]
//body.style.backgroundColor = "yellow"
function setColor(name){
    body.style.backgroundColor = name
}
function setRandom(setColor){
    let red = Math.round(Math.random()*255)
    let green = Math.round(Math.random()*255)
    let blue = Math.round(Math.random()*255)
    const name = `rgb(${red},${green},${blue})`
    setColor(name);
}

