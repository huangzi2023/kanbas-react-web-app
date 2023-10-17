export const StatusBar = () => {
  return (
    <div className="d-none d-lg-block">
      <div>
        <h3>Course Status</h3>
        <div>
          <button type="button" className="btn btn-outline-dark">
            <i className="fas fa-ban"></i>Unpublish
          </button>
          <button type="button" className="btn btn-success" disabled>
            <i className="far fa-check-circle"></i>
            Published
          </button>
        </div>

        <div
          className="btn-group-vertical mt-2 d-flex justify-content-center"
          role="group"
          aria-label="Vertical button group"
        >
          <button type="button" className="btn btn-outline-secondary">
            Import Existing Content
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Import from Commons
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Choose Home Page
          </button>
          <button type="button" className="btn btn-outline-secondary">
            View Course Stream
          </button>
          <button type="button" className="btn btn-outline-secondary">
            New Annoucement
          </button>
          <button type="button" className="btn btn-outline-secondary">
            New Analytics
          </button>
          <button type="button" className="btn btn-outline-secondary">
            View Course Notifications
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h4>Coming Up</h4>
        <a href="#">View Calendar</a>
        <hr />
        <ul>
          <li>
            <a href="#">Leture CS4550.12631.202410 Sep 7 at 11:45am</a>
          </li>
          <li>
            <a href="#">Leture CS4550.12631.202410 Sep 11 at 11:45am</a>
          </li>
          <li>
            <a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
