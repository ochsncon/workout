<script>
    let { workout } = $props();
</script>

<div class="card workout-card w-100 shadow-sm">
    <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title text-center mb-3">{workout.discipline}</h5>
        <a
            href={"/workouts/" + workout._id}
            class="btn btn-outline-dark mt-auto"
        >
            Details ansehen
        </a>
    </div>
</div>

<style>
    .card {
        margin-bottom: 20px;
    }
</style>
