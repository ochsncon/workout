<script>
    let { data } = $props();
</script>

<h1 class="mt-2">Athleten</h1>
<table class="table table-dark table-hover table-borderless">
    <thead>
        <tr>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Alter</th>
            <th>Gewicht (in kg)</th>
            <th>Erfahrung</th>
        </tr>
    </thead>
    <tbody>
        {#each data.athletes as athlete}
            <tr>
                <td>{athlete.first_name}</td>
                <td>{athlete.last_name}</td>
                <td>{athlete.age}</td>
                <td>{athlete.weight}</td>
                <td>{athlete.experience}</td>
            </tr>
        {/each}
    </tbody>
</table>
