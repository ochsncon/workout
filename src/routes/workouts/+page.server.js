import db from "$lib/db"

export async function load() {
    return {
        workouts: await db.getWorkouts()
    }

}