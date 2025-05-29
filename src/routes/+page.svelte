<div class="p-5 text-center bg-subtle text-white rounded-3 mt-5">
    <h1 class="display-3 fw-bold">Workout Tracker</h1>
    <p class="lead">
        Dokumentiere deine Trainings. Verwalte deine Fortschritte. Bleib dran.
    </p>
    <a class="btn btn-outline-primary" href="/workouts">Workouts ansehen</a>
    <a class="btn btn-outline-secondary" href="/athleten">Athleten ansehen</a>
</div>

<div class="row text-center mt-5 white-border py-4 px-3">
    <div class="col-md-6">
        <h4>Workouts</h4>
        <p>Übungen, Gewicht, Dauer, etc. – alles an einem Ort.</p>
    </div>
    <div class="col-md-6">
        <h4>Athleten</h4>
        <p>Sieh dir unsere Athleten an</p>
    </div>
</div>

<div id="carouselExampleCaptions" class="carousel slide mt-5">
    <div class="carousel-indicators">
        <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
        ></button>
        <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
        ></button>
        <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
        ></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img
                src="/images/benchpress.png"
                class="d-block w-100"
                alt="deadlift"
            />
            <div class="carousel-caption d-none d-md-block">
                <h5>Power & Technik</h5>
                <p>
                    Trainiere die Königsdisziplin des Gewichthebens – explosiv,
                    präzise, kontrolliert.
                </p>
            </div>
        </div>
        <div class="carousel-item">
            <img
                src="/images/wallball.png"
                class="d-block w-100"
                alt="wallball"
            />
            <div class="carousel-caption d-none d-md-block">
                <h5>Volle Körperkraft</h5>
                <p>
                    Verbinde Kraft, Ausdauer und Koordination in einer einzigen
                    Übung.
                </p>
            </div>
        </div>
        <div class="carousel-item">
            <img
                src="/images/benchpress.png"
                class="d-block w-100"
                alt="benchpress"
            />
            <div class="carousel-caption d-none d-md-block">
                <h5>Classic Strength</h5>
                <p>
                    Trainiere gezielt Brust, Trizeps und Schultern – stabil,
                    stark, effektiv
                </p>
            </div>
        </div>
    </div>
    <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
    >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
    >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

<style>
    h1 {
        color: white;
    }
    h4 {
        color: white;
    }
    .carousel-item img {
        height: 400px;
        object-fit: contain;
    }
    .white-border {
        border: 2px solid white;
        border-radius: 8px;
    }
</style>
