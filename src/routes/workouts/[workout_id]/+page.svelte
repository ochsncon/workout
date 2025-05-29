<script>
    let { data, form } = $props();
    let workout = data.workout;
    import "../../style.css";
</script>

<h1>Workout Details</h1>

<form method="POST" action="?/update">
    <input name="ID" type="hidden" value={data.workout._id} />

    <div class="mb-3">
        <label class="form-label" for="">Workout</label>
        <input
            value={data.workout.discipline}
            name="Workout"
            class="form-control"
            type="text"
            id=""
        />
    </div>
    <div class="mb-3">
        <label class="form-label" for="">Gewicht (in kg)</label>
        <input
            value={data.workout.weight}
            name="Gewicht"
            class="form-control"
            type="number"
            id=""
        />
    </div>
    <div class="mb-3">
        <label class="form-label" for="">Dauer (in Minuten)</label>
        <input
            value={data.workout.duration}
            name="Dauer"
            class="form-control"
            type="time"
            id=""
        />
    </div>
    <div class="mb-3">
        <label class="form-label" for="">Datum</label>
        <input
            value={data.workout.date}
            name="Datum"
            class="form-control"
            type="date"
            id=""
        />
    </div>
    <div class="mb-3">
        <label class="form-label" for="">Notizen</label>
        <input
            value={data.workout.notes}
            name="Notizen"
            class="form-control"
            type="text"
            id=""
        />
    </div>

    <button class="mb-3 btn btn-primary">Update</button>
</form>

<form method="POST" action="?/delete">
    <button class="mb-3 btn btn-danger" type="submit">Workout löschen</button>
</form>

{#if form?.success}
    <h2>Workout aktualisiert!</h2>
{/if}
