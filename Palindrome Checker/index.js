const input = document.getElementById("input")
function rev(value){
    return str = value.split("").reverse().join("")
    
}
function check(){
    const  value = input.value
    if(value==rev(value))
        alert("PALINDROME")
    else
        alert("NOT")
    input.value =  ""
}