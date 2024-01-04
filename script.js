

var inputbtn = document.getElementById("number-btn");
var result = document.getElementById("result");

inputbtn.addEventListener("click",function(){
    var number = document.getElementById("number").value;

    if(number >= 500) {
        result.innerText = "성공!";
    } else {
        result.innerText = "밥버러지";
    }
})