
let jumbotron = document.querySelector('.jumbotron');
console.log(jumbotron);
const preloader = function preloader(){
    if(jumbotron) {
        jumbotron.style.background = "url(https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?w=940&h=650" +
        "&auto=compress&cs=tinysrgb) no-repeat center";

        console.log("here");
    }
};

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } 
    else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        };
    }
}

addLoadEvent(preloader);
