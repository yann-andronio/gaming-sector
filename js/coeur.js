const coeur = document.querySelector('.coeur i');

coeur.addEventListener('click', function(e) {
    e.target.classList.toggle('far');
    e.target.classList.toggle('fas');
},false);