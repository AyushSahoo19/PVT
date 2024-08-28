function CardImg(): JSX.Element | string {
  return (
    <>
      <h1 className="text-center py-3 fw-bold">PRESSURE VESSEL TEST</h1>

      {/* Main Card */}
      <div
        className="card mb-3 p-3 ps-4 mx-auto card-3d w-75"
        style={{ width: "30rem", height: "" }}
      >
        {/* Heading with Bootstrap classes for styling */}
        <h5 className="card-title text-primary fw-bold mb-2 card-header fs-1">
          NITROGEN TANK 1 & 2
        </h5>

        {/* Image */}
        <img
          src="/images/nitrogen tank.jpg"
          className="card-img-top mb-2 rounded"
          alt="Equipment"
        />

        <div className="card-body p-2">
          <p className="card-text"></p>

          {/* Last Date and Due Date */}
          <p className="text-muted fw-bold mb-1 fs-5 card-header">
            Last Date: <span className="fw-semibold">2024-09-01</span>
          </p>
          <p className="text-muted fw-bold fs-5 card-header bg-light">
            Due Date: <span className="fw-semibold">2024-09-15</span>
          </p>
        </div>
      </div>

      <div className="d-flex  row row-cols-1 row-cols-md-3 g-4">
        {/* Additional Card with Primary Background */}
        <div
          className="card rounded-lg text-bg-secondary mb-3 p-3 mx-auto card-3d"
          style={{ maxWidth: "18rem" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold fs-5 text-white">
              Inspection Checklist
            </span>
            <a href="/pdfs/PVT-REPORT.pdf" download className="btn ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-arrow-down-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Additional Card with Info Background */}
        <div
          className="card text-bg-info mb-3 p-3 mx-auto card-3d"
          style={{ maxWidth: "18rem" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold fs-4 text-white">Manual Report</span>
            <a href="/pdfs/PVT-REPORT.pdf" download className="btn ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-arrow-down-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Additional Card with Primary Background */}
        <div
          className="card text-bg-primary mb-3 p-3 mx-auto card-3d"
          style={{ maxWidth: "18rem" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold fs-4 text-white">Monthly Report</span>
            <a href="/pdfs/PVT-REPORT.pdf" download className="btn ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-arrow-down-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="card rounded-lg text-bg-secondary mb-3 p-3 mx-auto card-3d"
          style={{ maxWidth: "18rem" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold fs-5 text-white">
              Inspection Checklist
            </span>
            <a href="/pdfs/PVT-REPORT.pdf" download className="btn ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-arrow-down-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardImg;
