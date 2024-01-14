var eyeBalls = document.getElementsByClassName("eyeBall");
document.onmousemove = function(){
    var x = event.clientX*100/window.innerWidth + "%";
    var y = event.clientY*100/window.innerHeight + "%";

    for(var i = 0;i<2;i++){
        eyeBalls[i].style.left = x;
        eyeBalls[i].style.top = y;
        eyeBalls[i].style.transform = "translate(-"+x+",-"+y+")"
    }
}