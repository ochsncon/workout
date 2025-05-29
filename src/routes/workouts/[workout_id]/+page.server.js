import { redirect } from "@sveltejs/kit";
import db from "$lib/db.js"

export async function load({ params }) {
    let workout = await db.getWorkout(params.workout_id)
    return {
        workout
    }
}

export const actions = {
    delete: async ({ params }) => {
        await db.deleteWorkout(params.workout_id);
        throw redirect(302, '/workouts');
    },

    update: async ({ request, params }) => {
        const data = await request.formData();
        let workout = {
            _id: data.get("ID"),
            discipline: data.get("Workout"),
            duration: data.get("Dauer"),
            weight: data.get("Gewicht"),
            notes: data.get("Notizen"),
            date: data.get("Datum")
        }
        await db.updateWorkout(workout)
        return { success: true }
    }
};

