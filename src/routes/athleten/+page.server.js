import db from "$lib/db"

export async function load() {
    return {
        athletes: await db.getAthletes()
    }

}