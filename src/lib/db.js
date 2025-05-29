import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("WorkoutDB"); // <- Dein Datenbankname

//////////////////////////////////////////
// Workouts Collection
//////////////////////////////////////////

// Alle Workouts abrufen
async function getWorkouts() {
    let workouts = [];
    try {
        const collection = db.collection("workouts");
        const query = {};
        workouts = await collection.find(query).toArray();
        workouts.forEach((workout) => {
            workout._id = workout._id.toString();
        });
    } catch (error) {
        console.log(error);
    }
    return workouts;
}

// Einzelnes Workout abrufen (nach ID)
async function getWorkout(id) {
    let workout = null;
    try {
        const collection = db.collection("workouts");
        const query = { _id: new ObjectId(id) };
        workout = await collection.findOne(query);
        if (workout) workout._id = workout._id.toString();
    } catch (error) {
        console.log(error.message);
    }
    return workout;
}

// Neues Workout erstellen
async function createWorkout(workout) {
    try {
        const collection = db.collection("workouts");
        const result = await collection.insertOne(workout);
        return result.insertedId.toString();
    } catch (error) {
        console.log(error.message);
    }
    return null;
}

// Bestehendes Workout aktualisieren
async function updateWorkout(workout) {
    try {
        const id = workout._id;
        delete workout._id;
        const collection = db.collection("workouts");
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: workout }
        );
        if (result.matchedCount > 0) return id;
    } catch (error) {
        console.log(error.message);
    }
    return null;
}

// Workout löschen (nach ID)
async function deleteWorkout(id) {
    try {
        const collection = db.collection("workouts");
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount > 0) return id;
    } catch (error) {
        console.log(error.message);
    }
    return null;
}

// Alle Athleten abrufen
async function getAthletes() {
    let athletes = [];
    try {
        const collection = db.collection("athletes");
        const query = {};
        athletes = await collection.find(query).toArray();
        athletes.forEach((athletes) => {
            athletes._id = athletes._id.toString();
        });
    } catch (error) {
        console.log(error);
    }
    return athletes;
}

// Export der Funktionen
export default {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout,
    getAthletes,
};
