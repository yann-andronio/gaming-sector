let imageslider = document.getElementsByClassName('imgslider');

let etape = 0;

let nbrimage =  imageslider.length;

let precedent = document.querySelector('.precedent');
let suivant =document.querySelector('.suivant');

function enleverActiveImage(){
    for(let i = 0 ; i < nbrimage ; i++){
        imageslider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function(){
    etape++;
    if(etape >= nbrimage) {
        etape = 0;
    }
    enleverActiveImage();
    imageslider[etape].classList.add('active');
})

precedent.addEventListener('click', function(){
    etape--;
    if(etape < 0) {
        etape = nbrimage - 1;
    }
    enleverActiveImage();
    imageslider[etape].classList.add('active');
})

// defilement automatique

setInterval(function (){
    etape++;
    if(etape >= nbrimage) {
        etape = 0;
    }
    enleverActiveImage();
    imageslider[etape].classList.add('active');
}, 4000)