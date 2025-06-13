const selectRef = document.querySelector('.filter select');
const allMoviesRef=document.querySelectorAll('.movie');
const alldeleteicons=document.querySelectorAll('.movie-delete-icon');
const removeAllButtonRef=document.querySelector('.filter button')
const moviesContainerRef=document.querySelector('.movies');

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

alldeleteicons.forEach(iconRef =>{
    iconRef.addEventListener('click', function(event){
        event.target.closest('.movie')?.remove();
    }
)
})

removeAllButtonRef.addEventListener('click', function(e){
moviesContainerRef.innerHTML = '';
})

