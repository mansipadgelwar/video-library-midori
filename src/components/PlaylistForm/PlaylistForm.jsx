import "../PlaylistForm/PlaylistForm.css";

const PlaylistForm = () => {
  return (
    <div className="playlist-form">
      <div className="modal-wrapper">
        <article className="form-container modal">
          <button className="modal-close-icon">
            <span className="material-icons">close</span>
          </button>
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
        </article>
      </div>
    </div>
  );
};

export { PlaylistForm };
