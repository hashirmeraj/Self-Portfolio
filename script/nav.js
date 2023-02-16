
console.log ( "hello")
var baar = document.getElementById("baar");

var meenu = document.getElementById("meenu");
window.onscroll =function(){
        if (window.pageYOffset >= meenu.offsetTop) {
            navbar.classList.add("sticky");
        }
        else{
            
            baar.classList.remove("sticky");
        }
}