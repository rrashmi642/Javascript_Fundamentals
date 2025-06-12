const selectRef = document.querySelector('.filter select');
const allMoviesRef=document.querySelectorAll('.movie');

selectRef.addEventListener('change', function (event){
    allMoviesRef.forEach(movieRef => {
        const genre = movieRef.getAttribute('data-genre');
        if(genre === event.target.value || event.target.value ==='All'){
            movieRef.classList.remove('hide');
        }
        else
        movieRef.classList.add('hide');
       
    })
});

