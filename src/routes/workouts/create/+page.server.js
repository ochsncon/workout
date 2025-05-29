import db from '$lib/db.js';

export const actions = {
    create: async ({ request }) => {

        const data = await request.formData();

        let workout = {
            date: data.get("Datum"),
            discipline: data.get("Workout"),
            duration: data.get("Dauer"),
            weight: data.get("Gewicht"),
            notes: data.get("Notizen"),
            category: data.get("Kategorie")
        }

        db.createWorkout(workout)

        return { success: true }
    }
}

