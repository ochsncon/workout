<script>
    import "../../style.css";
    let { form } = $props();
    let workout = {
        Workout: "",
        Datum: "",
        duration: "",
        weight: "",
        notes: "",
    };

    let showSuccess = $state(false);
    $effect(() => {
        if (form?.success) {
            showSuccess = true;
            const timer = setTimeout(() => {
                showSuccess = false;
            }, 3000);
        }
    });
</script>

<h1 class="mt-2">Workout hinzufügen</h1>

<form method="POST" action="?/create">
    <div class="mb-3">
        <label for="Workout" class="form-label">Workout</label>
        <input
            class="form-control"
            name="Workout"
            type="text"
            bind:value={workout.discipline}
        />
    </div>
    <div class="mb-3">
        <label for="Gewicht" class="form-label">Gewicht (in kg)</label>
        <input
            class="form-control"
            name="Gewicht"
            type="number"
            bind:value={workout.weight}
        />
    </div>
    <div class="mb-3">
        <label for="Dauer" class="form-label">Dauer (in Minuten)</label>
        <input
            class="form-control"
            name="Dauer"
            type="number"
            bind:value={workout.duration}
        />
    </div>
    <div class="mb-3">
        <label for="Datum" class="form-label">Datum</label>
        <input
            class="form-control"
            name="Datum"
            type="date"
            bind:value={workout.date}
        />
    </div>
    <div class="mb-3">
        <label for="Notizen" class="form-label">Notizen</label>
        <input
            class="form-control"
            name="Notizen"
            type="text"
            bind:value={workout.notes}
        />
    </div>
    <div>
        <label for="Notizen" class="form-label">Kategorie</label>
        <select
            class="form-select"
            name="Kategorie"
            bind:value={workout.category}
        >
            <option disabled selected value="">Kategorie wählen</option>
            <option value="Kraft">Kraft</option>
            <option value="Ausdauer">Ausdauer</option>
            <option value="Kombination">Kombination</option>
        </select>
    </div>

    <button class="mt-4 btn btn-primary mb-3" type="submit">Add Workout</button>
</form>

{#if showSuccess}
    <h2>Workout registriert!</h2>
{/if}
