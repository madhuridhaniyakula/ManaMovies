import { useEffect, useMemo, useState } from "react";
import "./App.css";


const movies = [
  {
    id: 1,
    title: "RRR",
    year: 2022,
    rating: 8.0,
    genre: "Action",
    director: "S. S. Rajamouli",
    language: "Telugu",
    color: "poster-red",
    emoji: "🔥",
    posterUrl: "/posters/rrr.jpg",
    description:
      "Two revolutionaries form an extraordinary friendship while fighting for freedom.",
  },
  {
    id: 2,
    title: "Pushpa: The Rise",
    year: 2021,
    rating: 7.6,
    genre: "Action",
    director: "Sukumar",
    language: "Telugu",
    color: "poster-green",
    emoji: "🌿",
    posterUrl: "/posters/pushpa.jpg",
    description:
      "A labourer rises through the ranks of a red sandalwood smuggling syndicate.",
  },
  {
    id: 3,
    title: "Hi Nanna",
    year: 2023,
    rating: 8.2,
    genre: "Romance",
    director: "Shouryuv",
    language: "Telugu",
    color: "poster-blue",
    emoji: "💙",
    posterUrl: "/posters/hi-nanna.jpg",
    description:
      "A touching family drama about love, memories, and a father-daughter bond.",
  },
  {
    id: 4,
    title: "Jersey",
    year: 2019,
    rating: 8.5,
    genre: "Drama",
    director: "Gowtam Tinnanuri",
    language: "Telugu",
    color: "poster-gold",
    emoji: "🏏",
    posterUrl: "/posters/jersey.jpg",
    description:
      "A former cricketer returns to the game to fulfil his dream and make his son proud.",
  },
  {
    id: 5,
    title: "Sita Ramam",
    year: 2022,
    rating: 8.5,
    genre: "Romance",
    director: "Hanu Raghavapudi",
    language: "Telugu",
    color: "poster-pink",
    emoji: "💌",
    posterUrl: "/posters/sita-ramam.jpg",
    description:
      "An unanswered letter leads to an unforgettable story of love across time.",
  },
  {
    id: 6,
    title: "Hanu-Man",
    year: 2024,
    rating: 7.8,
    genre: "Fantasy",
    director: "Prasanth Varma",
    language: "Telugu",
    color: "poster-orange",
    emoji: "⚡",
    posterUrl: "/posters/hanuman.jpg",
    description:
      "An ordinary young man discovers extraordinary powers in a superhero adventure.",
  },
  {
    id: 7,
    title: "Mahanati",
    year: 2018,
    rating: 8.4,
    genre: "Drama",
    director: "Nag Ashwin",
    language: "Telugu",
    color: "poster-purple",
    emoji: "🎬",
    posterUrl: "/posters/mahanati.jpg",
    description:
      "A biographical drama portraying the life and career of legendary actress Savitri.",
  },
  {
    id: 8,
    title: "Ala Vaikunthapurramuloo",
    year: 2020,
    rating: 7.3,
    genre: "Comedy",
    director: "Trivikram Srinivas",
    language: "Telugu",
    color: "poster-teal",
    emoji: "✨",
    posterUrl: "/posters/ala-vaikunthapuramuloo.jpg",
    description:
      "A young man discovers the truth about his birth and his place in two families.",
  },
  {
    id: 9,
    title: "Baahubali: The Beginning",
    year: 2015,
    rating: 8.0,
    genre: "Fantasy",
    director: "S. S. Rajamouli",
    language: "Telugu",
    color: "poster-orange",
    emoji: "⚔️",
    posterUrl: "/posters/bahubali-1.jpg",
    description:
      "A young man uncovers his royal heritage and becomes part of a legendary conflict.",
  },
  {
    id: 10,
    title: "Baahubali 2: The Conclusion",
    year: 2017,
    rating: 8.2,
    genre: "Action",
    director: "S. S. Rajamouli",
    language: "Telugu",
    color: "poster-red",
    emoji: "👑",
    posterUrl: "/posters/bahubali-2.jpg",
    description:
      "The epic saga continues as Mahendra Baahubali seeks answers and justice.",
  },
  {
    id: 11,
    title: "Arjun Reddy",
    year: 2017,
    rating: 7.8,
    genre: "Romance",
    director: "Sandeep Reddy Vanga",
    language: "Telugu",
    color: "poster-purple",
    emoji: "❤️‍🔥",
    posterUrl: "/posters/arjun-reddy.jpg",
    description:
      "An intense relationship drama following a brilliant but self-destructive surgeon.",
  },
  {
    id: 12,
    title: "Rangasthalam",
    year: 2018,
    rating: 8.2,
    genre: "Drama",
    director: "Sukumar",
    language: "Telugu",
    color: "poster-green",
    emoji: "🌾",
    posterUrl: "/posters/rangasthalam.jpg",
    description:
      "A villager challenges the powerful forces controlling his rural community.",
  },
  {
    id: 13,
    title: "Eega",
    year: 2012,
    rating: 7.7,
    genre: "Fantasy",
    director: "S. S. Rajamouli",
    language: "Telugu",
    color: "poster-teal",
    emoji: "🪰",
    posterUrl: "/posters/eega.jpg",
    description:
      "A murdered man returns as a housefly to protect the woman he loves and seek revenge.",
  },
  {
    id: 14,
    title: "Athadu",
    year: 2005,
    rating: 8.0,
    genre: "Action",
    director: "Trivikram Srinivas",
    language: "Telugu",
    color: "poster-blue",
    emoji: "🎯",
    posterUrl: "/posters/athadu.jpg",
    description:
      "A professional assassin assumes another man's identity and discovers a new family.",
  },
  {
    id: 15,
    title: "Pokiri",
    year: 2006,
    rating: 8.0,
    genre: "Action",
    director: "Puri Jagannadh",
    language: "Telugu",
    color: "poster-red",
    emoji: "🕶️",
    posterUrl: "/posters/pokiri.jpg",
    description:
      "A fearless contract killer becomes entangled in a dangerous criminal underworld.",
  },
  {
    id: 16,
    title: "Fidaa",
    year: 2017,
    rating: 7.4,
    genre: "Romance",
    director: "Sekhar Kammula",
    language: "Telugu",
    color: "poster-pink",
    emoji: "💗",
    posterUrl: "/posters/fidaa.jpg",
    description:
      "A medical student's life changes when he falls in love with an independent village woman.",
  },
  {
    id: 17,
    title: "Pelli Choopulu",
    year: 2016,
    rating: 7.6,
    genre: "Comedy",
    director: "Tharun Bhascker",
    language: "Telugu",
    color: "poster-gold",
    emoji: "🍳",
    posterUrl: "/posters/pelli-choopulu.jpg",
    description:
      "Two strangers turn an unexpected meeting into a food-business adventure.",
  },
  {
    id: 18,
    title: "Agent Sai Srinivasa Athreya",
    year: 2019,
    rating: 8.2,
    genre: "Comedy",
    director: "Swaroop RSJ",
    language: "Telugu",
    color: "poster-teal",
    emoji: "🔎",
    posterUrl: "/posters/agent-sai-srinivasa-athreya.jpg",
    description:
      "A small-town detective investigates a mysterious case that becomes much bigger than expected.",
  },
  {
    id: 19,
    title: "Goodachari",
    year: 2018,
    rating: 7.8,
    genre: "Action",
    director: "Sashi Kiran Tikka",
    language: "Telugu",
    color: "poster-blue",
    emoji: "🕵️",
    posterUrl: "/posters/goodachari.jpg",
    description:
      "A young intelligence agent uncovers a conspiracy while trying to clear his name.",
  },
  {
    id: 20,
    title: "C/o Kancharapalem",
    year: 2018,
    rating: 8.4,
    genre: "Drama",
    director: "Venkatesh Maha",
    language: "Telugu",
    color: "poster-gold",
    emoji: "🏡",
    posterUrl: "/posters/co-kancharapalem.jpg",
    description:
      "Interconnected stories explore love and everyday life in a small coastal community.",
  },
];


const genres = [
  "All",
  "Action",
  "Romance",
  "Drama",
  "Comedy",
  "Fantasy",
];


function App() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [favorites, setFavorites] = useState(() => {
      return JSON.parse(localStorage.getItem("manaMoviesFavorites") || "[]");
  });

  const [watched, setWatched] = useState(() => {
      return JSON.parse(localStorage.getItem("manaMoviesWatched") || "[]");
  });
  useEffect(() => {
    localStorage.setItem("manaMoviesFavorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("manaMoviesWatched", JSON.stringify(watched));
  }, [watched]);
  const [view, setView] = useState("all");
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortBy, setSortBy] = useState("popular");

  
const filteredMovies = useMemo(() => {
  let result = movies.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie.director.toLowerCase().includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" || movie.genre === genre;

    const matchesFavorite =
      !showFavorites || favorites.includes(movie.id);

    const matchesView =
      view === "all" ||
      (view === "watched" && watched.includes(movie.id)) ||
      (view === "unwatched" && !watched.includes(movie.id));

    return (
      matchesSearch &&
      matchesGenre &&
      matchesFavorite &&
      matchesView
    );
  });

  if (sortBy === "rating") {
    result = [...result].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "newest") {
    result = [...result].sort((a, b) => b.year - a.year);
  }

  return result;
}, [search, genre, favorites, showFavorites, sortBy, view, watched]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((movieId) => movieId !== id)
        : [...current, id]
    );
  }
  function toggleWatched(id) {
   setWatched((current) =>
    current.includes(id)
       ? current.filter((movieId) => movieId !== id)
       : [...current, id]
   );
  }

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">T</span>
          <span>Mana<span className="brand-accent">Movies</span></span>
        </a>

        <nav className="nav-links">
          <a className="active-link" href="#home">Discover</a>
          <a href="#collection">Movies</a>
        </nav>

        <button
          className={`favorite-nav ${showFavorites ? "selected" : ""}`}
          onClick={() => {
            setShowFavorites(!showFavorites);
            setSelectedMovie(null);
          }}
        >
          ♥ <span>My Watchlist</span>
          <span className="favorite-count">{favorites.length}</span>
        </button>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="live-dot" />
              YOUR TELUGU CINEMA DESTINATION
            </span>

            <h1>
              Every story.
              <br />
              Every <span>emotion.</span>
              <br />
              Mana cinema.
            </h1>

            <p className="hero-description">
              Discover the films we love, the stories we
              remember, and the magic of Telugu cinema.
            </p>

            <a className="explore-button" href="#collection">
              Explore movies <span>↘</span>
            </a>

            <div className="hero-stats">
              <div>
                <strong>01</strong>
                <span>Discover</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Explore</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Watchlist</span>
              </div>
            </div>
          </div>

          <div className="hero-art" aria-label="Telugu cinema artwork">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-sun" />
            <div className="art-film">మూవీస్</div>
            <div className="art-caption">
              <span>THE MAGIC OF</span>
              <strong>TELUGU CINEMA</strong>
              <span>MADE WITH ❤️</span>
            </div>
            <span className="art-star star-one">✦</span>
            <span className="art-star star-two">✧</span>
            <span className="art-star star-three">✦</span>
          </div>
        </section>

        <section className="collection" id="collection">
          <div className="section-heading">
            <div>
              <span className="section-kicker">HANDPICKED FOR YOU</span>
              <h2>
                {showFavorites ? "My Watchlist" : "Explore movies"}
                <span className="heading-dot">.</span>
              </h2>
              <p>Find your next favourite Telugu film.</p>
            </div>
            <span className="movie-total">
              {filteredMovies.length.toString().padStart(2, "0")} FILMS
            </span>
          </div>

          <div className="search-row">
            <label className="search-box">
              <span className="search-icon">⌕</span>
              <input
                type="search"
                placeholder="Search movies or directors..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <kbd>SEARCH</kbd>
            </label>

            <select
              className="sort-select"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              aria-label="Sort movies"
            >
              <option value="popular">Featured</option>
              <option value="rating">Top rated</option>
              <option value="newest">Newest first</option>
            </select>
          </div>
          


         
          <div className="genre-row">
            {[
              { label: "All movies", value: "all" },
              { label: "Not watched", value: "unwatched" },
              { label: "Watched", value: "watched" },
            ].map((item) => (
              <button
                key={item.value}
                className={`genre-chip ${
                  view === item.value ? "genre-active" : ""
                }`}
                onClick={() => setView(item.value)}
              >
                {item.label}
                {item.value === "watched" && ` (${watched.length})`}
              </button>
            ))}
          </div> 
          <div className="genre-row">
            {genres.map((item) => (
              <button
                key={item}
                className={`genre-chip ${genre === item ? "genre-active" : ""}`}
                onClick={() => setGenre(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {filteredMovies.length > 0 ? (
            <div className="movie-grid">
              {filteredMovies.map((movie, index) => (
                <article
                  className="movie-card"
                  key={movie.id}
                  style={{ "--card-index": index }}
                >
               
                  <button
                    className={`poster ${movie.color} ${
                      movie.posterUrl ? "has-real-poster" : ""
                    }`}
                    onClick={() => setSelectedMovie(movie)}
                    aria-label={`View ${movie.title} details`}
                  >
                    {movie.posterUrl && (
                      <img
                        src={movie.posterUrl}
                        alt={`${movie.title} poster`}
                        className="poster-image"
                      />
                    )}

                    <span className="poster-top">
                      {!movie.posterUrl && (
                        <span className="poster-language">TELUGU</span>
                      )}
                      <span className="poster-rating">
                        ★ {movie.rating.toFixed(1)}
                      </span>
                    </span>

                    {!movie.posterUrl && (
                      <>
                        <span className="poster-emoji">{movie.emoji}</span>
                        <span className="poster-title">{movie.title}</span>
                        <span className="poster-bottom">
                          <span>{movie.year}</span>
                          <span>CINEMA • తెలుగు</span>
                        </span>
                        <span className="poster-view">VIEW FILM ↗</span>
                      </>
                    )}
                  </button>

                  <button
                    className={`heart-button ${
                      favorites.includes(movie.id) ? "heart-active" : ""
                    }`}
                    onClick={() => toggleFavorite(movie.id)}
                    aria-label={
                      favorites.includes(movie.id)
                        ? "Remove from watchlist"
                        : "Add to watchlist"
                    }
                  >
                    {favorites.includes(movie.id) ? "♥" : "♡"}
                  </button>
                  <button
                    className={`watched-button ${
                      watched.includes(movie.id) ? "watched-active" : ""
                    }`}
                    onClick={() => toggleWatched(movie.id)}
                    aria-label={
                      watched.includes(movie.id)
                        ? "Mark as not watched"
                        : "Mark as watched"
                    }
                  >
                    {watched.includes(movie.id) ? "✓ Watched" : "＋ Watched"}
                  </button>
                  <button
                    className="movie-info"
                    onClick={() => setSelectedMovie(movie)}
                  >
                    <span className="movie-genre">{movie.genre}</span>
                    <strong>{movie.title}</strong>
                    <span className="movie-meta">
                      {movie.year} <span>·</span> {movie.director}
                    </span>
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>🎞️</span>
              <h3>No movies found</h3>
              <p>Try another title or change your filters.</p>
              <button
                className="explore-button"
                onClick={() => {
                  setSearch("");
                  setGenre("All");
                  setShowFavorites(false);
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </section>

        <footer className="footer">
          <a className="brand" href="#home">
            <span className="brand-icon">T</span>
            <span>Mana<span className="brand-accent">Movies</span></span>
          </a>
          <p>Made for the love of Telugu cinema.</p>
          <span className="footer-note">
            DEMO VERSION · SAMPLE MOVIE DATA
          </span>
        </footer>
      </main>

      {selectedMovie && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedMovie(null)}
        >
          <section
            className="movie-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedMovie.title} details`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedMovie(null)}
              aria-label="Close details"
            >
              ×
            </button>
            <div className={`modal-art ${selectedMovie.color}`}>
              {selectedMovie.posterUrl ? (
                <img
                  className="modal-poster-image"
                  src={selectedMovie.posterUrl}
                  alt={`${selectedMovie.title} movie poster`}
                />
              ) : (
                <span className="modal-poster-emoji">{selectedMovie.emoji}</span>
              )}
            </div>

            <span className="section-kicker">
              TELUGU FILM · {selectedMovie.year}
            </span>
            <h2>{selectedMovie.title}</h2>
            <p className="modal-description">{selectedMovie.description}</p>
            <p><strong>Director:</strong> {selectedMovie.director}</p>
            <p><strong>Genre:</strong> {selectedMovie.genre}</p>
            <p><strong>Rating:</strong> ★ {selectedMovie.rating.toFixed(1)} / 10</p>
            <button
              className={`watched-button ${
                watched.includes(selectedMovie.id) ? "watched-active" : ""
              }`}
              onClick={() => toggleWatched(selectedMovie.id)}
            >
              {watched.includes(selectedMovie.id)
                ? "✓ Marked as watched"
                : "＋ Mark as watched"}
            </button>
            <button
              className="explore-button modal-watchlist"
              onClick={() => toggleFavorite(selectedMovie.id)}
            >
              {favorites.includes(selectedMovie.id)
                ? "♥ In your watchlist"
                : "♡ Add to watchlist"}
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
