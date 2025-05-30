<script>
    import Workouts from "$lib/components/Workouts.svelte";
    let { data } = $props();
    let workouts = data.workouts;
    let search = $state("");
</script>

<h1 class="mt-2">Workouts</h1>

<div class="mb-3">
    <input
        type="text"
        class="form-control"
        placeholder="Workout suchen (z.B. Burpee)"
        bind:value={search}
    />
</div>

<div class="container mt-4">
    <div class="row">
        {#each workouts.filter((w) => w.discipline
                .toLowerCase()
                .includes(search.toLowerCase())) as workout}
            <div class="col-sm-6 col-md-4 col-lg-3 d-flex">
                <Workouts {workout} />
            </div>
        {/each}
    </div>
</div>

<div class="mt-1">
    <a href="/workouts/create" class="btn btn-primary">Workout hinzufügen</a>
</div>
