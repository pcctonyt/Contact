
  
  const App = () => {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <h2>Favorite Movies</h2>
          {profiles.map((profile) => {
            const userName = users[profile.userID].name;
            const favMovieName = movies[profile.favoriteMovieID].name;
            return(
              <li key={profile.id}>
                <p>{`${userName}'s favorite movie is "${favMovieName}."`}</p>
              </li>
            )
          })}
        </header>
        <h2>Favorite Movies</h2>
      </div>
    );
  };
  
  export default App;
  