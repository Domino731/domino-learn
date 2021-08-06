import {db} from "./firebaseIndex";

export const getTask = (tasks:string) => {
    db.collection(tasks).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
}