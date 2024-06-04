const apiKey = '84543f0d2c400a5924ff866cc41cd065'; // Replace with your TMDb API key
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const moviesContainer = document.getElementById('moviesContainer');
const backButton = document.getElementById('backButton');
const searchContainer = document.getElementById('searchContainer');
const backButtonContainer = document.getElementById('backButtonContainer');
const playlistContainer = document.getElementById('playlistContainer');
const playlist = document.getElementById('playlist');

let moviePlaylist = [];

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        fetchMovies(query);
    }
});

backButton.addEventListener('click', () => {
    moviesContainer.innerHTML = '';
    backButtonContainer.classList.add('hidden');
    searchContainer.style.display = 'flex';
    playlistContainer.style.display = 'block';
});

async function fetchMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results.length > 0) {
            displayMovies(data.results);
        } else {
            moviesContainer.innerHTML = `<p>No results found</p>`;
            backButtonContainer.classList.remove('hidden');
            searchContainer.style.display = 'none';
            playlistContainer.style.display = 'none';
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        moviesContainer.innerHTML = `<p>Error fetching movies. Please try again later.</p>`;
    }
}

function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    searchContainer.style.display = 'none';
    backButtonContainer.classList.remove('hidden');
    playlistContainer.style.display = 'block';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const movieImage = document.createElement('img');
        movieImage.src = movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'placeholder-image.jpg';
        movieImage.alt = movie.title;

        const movieDetails = document.createElement('div');
        movieDetails.classList.add('movie-details');

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;

        const movieYear = document.createElement('p');
        movieYear.textContent = `Year: ${new Date(movie.release_date).getFullYear()}`;

        const addToPlaylistButton = document.createElement('button');
        addToPlaylistButton.textContent = 'Add to Playlist';
        addToPlaylistButton.addEventListener('click', () => addToPlaylist(movie));

        movieDetails.appendChild(movieTitle);
        movieDetails.appendChild(movieYear);
        
        movieElement.appendChild(movieImage);
        movieElement.appendChild(movieDetails);
        movieElement.appendChild(addToPlaylistButton);

        moviesContainer.appendChild(movieElement);
    });
}

function addToPlaylist(movie) {
    if (!moviePlaylist.some(m => m.id === movie.id)) {
        moviePlaylist.push(movie);
        updatePlaylist();
    }
}

function updatePlaylist() {
    playlist.innerHTML = '';
    moviePlaylist.forEach(movie => {
        const playlistItem = document.createElement('li');
        playlistItem.classList.add('playlist-item');

        const playlistImage = document.createElement('img');
        playlistImage.src = movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'placeholder-image.jpg';
        playlistImage.alt = movie.title;

        const playlistDetails = document.createElement('div');
        playlistDetails.classList.add('movie-details');

        const playlistTitle = document.createElement('h3');
        playlistTitle.textContent = movie.title;

        const removeFromPlaylistButton = document.createElement('button');
        removeFromPlaylistButton.classList.add('remove');
        removeFromPlaylistButton.textContent = 'Remove from Playlist';
        removeFromPlaylistButton.addEventListener('click', () => removeFromPlaylist(movie.id));

        playlistDetails.appendChild(playlistTitle);

        playlistItem.appendChild(playlistImage);
        playlistItem.appendChild(playlistDetails);
        playlistItem.appendChild(removeFromPlaylistButton);

        playlist.appendChild(playlistItem);
    });
}

function removeFromPlaylist(movieId) {
    moviePlaylist = moviePlaylist.filter(movie => movie.id !== movieId);
    updatePlaylist();
}

// Initial update of the playlist in case there are pre-loaded items
updatePlaylist();
