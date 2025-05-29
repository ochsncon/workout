<script>
    import Workouts from "$lib/components/Workouts.svelte";
    let { data } = $props();
    let workouts = data.workouts;
</script>

<h1>Workouts</h1>

<div class="mb-3">
    <a href="/workouts/create" class="btn btn-primary">Workout hinzufügen</a>
</div>

<div class="mb-3 container mt-4">
    <div class="row">
        {#each workouts as workout}
            <div class="col-sm-6 col-md-4 col-lg-3 d-flex">
                <Workouts {workout} />
            </div>
        {/each}
    </div>
</div>
