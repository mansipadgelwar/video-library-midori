import "../PlaylistForm/PlaylistForm.css";

const PlaylistForm = () => {
  return (
    <div className="authentication-page">
      <article className="form-container login-form">
        <div className="authentication-form-container">
          <form className="form" action="">
            <h3 className="h3">Create New Playlist</h3>
            <label htmlFor="playlist" className="input-label ">
              Playlist Name
            </label>
            <div className="input">
              <input
                className="input"
                type="text"
                id="playlist"
                name="playlist"
                placeholder="My Playlist"
              />
            </div>
            <button className="btn btn-secondary">Create Playlist</button>
          </form>
        </div>
      </article>
    </div>
  );
};

export { PlaylistForm };
