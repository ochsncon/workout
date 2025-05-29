<script>
    import { page } from "$app/stores";
    import { derived } from "svelte/store";
    const path = derived(page, ($page) => $page.url.pathname);

    import "./style.css";
    let { children } = $props();
</script>

<nav
    class="navbar navbar-expand-lg bg-body-tertiary bg-dark"
    data-bs-theme="dark"
>
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Workout Tracker</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/" class:active={$path === "/"}
                        >Home</a
                    >
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="/workouts"
                        class:active={$path === "/workouts"}>Workouts</a
                    >
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="/workouts/create"
                        class:active={$path === "/workouts/create"}
                        >Create Workout</a
                    >
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="/athleten"
                        class:active={$path === "/athleten"}>Athleten</a
                    >
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="container">
    {@render children()}
</div>
